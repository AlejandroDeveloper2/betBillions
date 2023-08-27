import { useState, createContext, useMemo } from "react";

import {
  ProviderProps,
  ToastTypes,
  ShoppingCartContextType,
  BingoBoard,
} from "types";
import { useToastContext } from "@hooks/index";

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

const ShoppingCartProvider = ({ children }: ProviderProps) => {
  const cartLS: BingoBoard[] = JSON.parse(
    window.localStorage.getItem("cart") ?? "[]"
  );
  const totalLS: number = JSON.parse(
    window.localStorage.getItem("totalToPay") ?? "0"
  );
  const [bingoBoards, setBingoBoards] = useState<BingoBoard[]>(cartLS);
  const [totalToPay, setTotalToPay] = useState<number>(totalLS);
  const { openToast } = useToastContext();

  const addBingoBoardToCart = (
    bingoBoard: BingoBoard,
    numberOfRounds: number,
    price: number
  ): void => {
    if (bingoBoards.length < numberOfRounds) {
      if (bingoBoards.includes(bingoBoard)) {
        openToast({
          message: "Ya seleccionaste este cartón!",
          type: ToastTypes.error,
        });
        return;
      }
      setBingoBoards([...bingoBoards, bingoBoard]);
      setTotalToPay((prevState) => {
        if (bingoBoards.length < 5) {
          return prevState + price;
        }
        return prevState;
      });
      window.localStorage.setItem("totalToPay", String(totalToPay + price));
      window.localStorage.setItem(
        "cart",
        JSON.stringify([...bingoBoards, bingoBoard])
      );
      openToast({
        message: "Carton agregado!",
        type: ToastTypes.success,
      });
    } else {
      openToast({
        message: `Solo puedes seleccionar maximo ${numberOfRounds} cartones!`,
        type: ToastTypes.warning,
      });
    }
  };

  const removeBingoBoardFromCart = (
    bingoBoardId: string,
    price: number
  ): void => {
    const filteredBingoBoards = bingoBoards.filter(
      (bingoBoard) => bingoBoard.key !== bingoBoardId
    );
    setBingoBoards(filteredBingoBoards);
    window.localStorage.setItem("cart", JSON.stringify(filteredBingoBoards));
    if (bingoBoards.length <= 5) {
      setTotalToPay((prevState) => prevState - price);
      window.localStorage.setItem("totalToPay", String(totalToPay - price));
    }
    openToast({
      message: "Cartón removido!",
      type: ToastTypes.success,
    });
  };

  const clearShoppingCart = (): void => {
    setBingoBoards([]);
    setTotalToPay(0);
    if (
      window.localStorage.getItem("cart") ||
      window.localStorage.getItem("totalToPay")
    ) {
      window.localStorage.removeItem("cart");
      window.localStorage.removeItem("totalToPay");
    }
  };

  const value = useMemo(
    () => ({
      bingoBoards,
      totalToPay,
      addBingoBoardToCart,
      removeBingoBoardFromCart,
      clearShoppingCart,
    }),
    [
      bingoBoards,
      totalToPay,
      addBingoBoardToCart,
      removeBingoBoardFromCart,
      clearShoppingCart,
    ]
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider };
export default ShoppingCartContext;
