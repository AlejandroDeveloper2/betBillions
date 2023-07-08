import { useContext } from "react";

import TransactionContext from "@context/TransactionProvider";

const useTransactionContext = () => {
  return useContext(TransactionContext);
};

export default useTransactionContext;
