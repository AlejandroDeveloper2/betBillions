import { useContext } from "react";

import WithdrawContext from "@context/WithdrawProvider";

const useWithdrawContext = () => {
  return useContext(WithdrawContext);
};

export default useWithdrawContext;
