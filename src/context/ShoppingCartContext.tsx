import { useState, createContext, useMemo, useEffect } from "react";

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
  const [bingoBoards, setBingoBoards] = useState<BingoBoard[]>(cartLS);
  const [totalToPay, setTotalToPay] = useState<number>(0);
  const [singleBoardPrice] = useState<number>(5);
  const { showToast, hideToast, configToast } = useToastContext();

  const getCart = (): void => {
    if (window.localStorage.getItem("cart")) {
      if (cartLS.length <= 5) {
        setTotalToPay(cartLS.length * singleBoardPrice);
      } else {
        setTotalToPay(cartLS.length * singleBoardPrice - singleBoardPrice * 2);
      }
    }
  };

  const addBingoBoardToCart = (bingoBoard: BingoBoard): void => {
    if (bingoBoards.length < 7) {
      if (bingoBoards.includes(bingoBoard)) {
        configToast(ToastTypes.error, "Ya seleccionaste este cartón!");
        showToast();
        return;
      }
      setBingoBoards([...bingoBoards, bingoBoard]);
      setTotalToPay((prevState) => {
        if (bingoBoards.length < 5) {
          return prevState + singleBoardPrice;
        }
        return prevState;
      });
      window.localStorage.setItem(
        "cart",
        JSON.stringify([...bingoBoards, bingoBoard])
      );
      configToast(ToastTypes.success, "Carton agregado!");
      showToast();
    } else {
      configToast(
        ToastTypes.warning,
        "Solo puedes seleccionar maximo 7 cartones!"
      );
      showToast();
    }
    hideToast(4000);
  };

  const removeBingoBoardFromCart = (bingoBoardId: string): void => {
    const filteredBingoBoards = bingoBoards.filter(
      (bingoBoard) => bingoBoard.key !== bingoBoardId
    );
    setBingoBoards(filteredBingoBoards);
    window.localStorage.setItem("cart", JSON.stringify(filteredBingoBoards));
    if (bingoBoards.length <= 5) {
      setTotalToPay((prevState) => prevState - singleBoardPrice);
    }
    configToast(ToastTypes.success, "Cartón removido!");
    showToast();
    hideToast(4000);
  };

  const clearShoppingCart = (): void => {
    setBingoBoards([]);
    setTotalToPay(0);
    if (window.localStorage.getItem("cart")) {
      window.localStorage.removeItem("cart");
    }
  };

  useEffect(() => {
    getCart();
  }, []);

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
