import { useContext } from "react";

import BingoContext from "@context/BingoProvider";

const useBingoContext = () => {
  return useContext(BingoContext);
};

export default useBingoContext;
