import { useContext } from "react";

import ShoppingCartContext from "@context/ShoppingCartContext";

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export default useShoppingCartContext;
