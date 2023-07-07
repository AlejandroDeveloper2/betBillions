import { useContext } from "react";

import WalletContext from "@context/WalletProvider";

const useWalletContext = () => {
  return useContext(WalletContext);
};

export default useWalletContext;
