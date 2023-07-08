import { useState, createContext, useMemo, useEffect } from "react";

import {
  ProviderProps,
  ToastTypes,
  ShoppingCartContextType,
  BingoBoard,
  ToastConfig,
} from "../types";

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

  const getCart = (): void => {
    if (window.localStorage.getItem("cart")) {
      if (cartLS.length <= 5) {
        setTotalToPay(cartLS.length * singleBoardPrice);
      } else {
        setTotalToPay(cartLS.length * singleBoardPrice - singleBoardPrice * 2);
      }
    }
  };

  const addBingoBoardToCart = (
    bingoBoard: BingoBoard,
    config: ToastConfig
  ): void => {
    setBingoBoards((prevState) => {
      const newState = [...prevState, bingoBoard];
      return newState;
    });
    setTotalToPay((prevState) => {
      if (bingoBoards.length <= 5) {
        return prevState + singleBoardPrice;
      }
      return prevState;
    });
    window.localStorage.setItem("cart", JSON.stringify(bingoBoards));
    config.configToast(ToastTypes.success, "Carton agregado!");
    config.showToast();
    config.hideToast(3000);
  };

  const removeBingoBoardFromCart = (
    bingoBoardId: string,
    config: ToastConfig
  ): void => {
    const filteredBingoBoards = bingoBoards.filter(
      (bingoBoard) => bingoBoard.id !== bingoBoardId
    );
    setBingoBoards(filteredBingoBoards);
    window.localStorage.setItem("cart", JSON.stringify(bingoBoards));
    setTotalToPay((prevState) => prevState - singleBoardPrice);
    config.configToast(ToastTypes.success, "Carton removido!");
    config.showToast();
    config.hideToast(3000);
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
