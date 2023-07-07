import { useContext } from "react";

import LotteryContext from "@context/LotteryProvider";

const useLotteryContext = () => {
  return useContext(LotteryContext);
};

export default useLotteryContext;
