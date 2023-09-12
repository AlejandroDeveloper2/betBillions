import { createContext, useMemo, useCallback } from "react";

import {
  LoadingConfig,
  ProviderProps,
  Retreat,
  ToastTypes,
  WithdrawContextType,
  WithdrawFormValues,
} from "types";
import { TokenAuth } from "@utils/index";
import { useToastContext } from "@hooks/index";

/*services*/
import { WithdrawService } from "@services/withdraws.service";

const WithdrawContext = createContext<WithdrawContextType>(
  {} as WithdrawContextType
);

const tokenAuth = new TokenAuth();
const withdrawService = new WithdrawService();

const WithdrawProvider = ({ children }: ProviderProps) => {
  const { openToast } = useToastContext();

  const sendWithdrawRequest = useCallback(
    async (withdrawData: WithdrawFormValues, config: LoadingConfig) => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Enviando solicitud de retiro..");
          config.activeLoading();
          const res = await withdrawService.sendWithdrawRequest(
            withdrawData,
            token
          );
          openToast({
            message: res.message,
            type: res.typeStatus,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const validateTransaction = useCallback(
    async (retreatData: Retreat, config: LoadingConfig): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("");
          config.activeLoading();
          const res = await withdrawService.validateTransaction(
            retreatData,
            token
          );
          openToast({
            message: res.message,
            type: res.typeStatus,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const invalidateTransaction = useCallback(
    async (retreatData: Retreat, config: LoadingConfig): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("");
          config.activeLoading();
          const res = await withdrawService.invalidateTransaction(
            retreatData,
            token
          );
          openToast({
            message: res.message,
            type: res.typeStatus,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const value = useMemo(
    () => ({ sendWithdrawRequest, validateTransaction, invalidateTransaction }),
    [sendWithdrawRequest, validateTransaction, invalidateTransaction]
  );

  return (
    <WithdrawContext.Provider value={value}>
      {children}
    </WithdrawContext.Provider>
  );
};

export { WithdrawProvider };
export default WithdrawContext;
