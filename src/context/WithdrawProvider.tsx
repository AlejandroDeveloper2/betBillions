import { useState, createContext, useMemo, useCallback } from "react";

import {
  LoadingConfig,
  ProviderProps,
  ToastTypes,
  WithdrawContextType,
} from "types";
import { TokenAuth } from "@utils/index";
import { useToastContext } from "@hooks/index";

/*services*/

const WithdrawContext = createContext<WithdrawContextType>(
  {} as WithdrawContextType
);

const tokenAuth = new TokenAuth();

const WithdrawProvider = ({ children }: ProviderProps) => {
  const value = useMemo(() => ({}), []);

  return (
    <WithdrawContext.Provider value={value}>
      {children}
    </WithdrawContext.Provider>
  );
};

export { WithdrawProvider };
export default WithdrawContext;
