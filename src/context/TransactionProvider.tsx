import { createContext, useMemo, useCallback } from "react";
import { UseFormReset } from "react-hook-form";

import {
  MessageConfig,
  ProviderProps,
  ToastTypes,
  TransactionContextType,
  ValidTransactionFormValues,
} from "types";
import { TokenAuth } from "@utils/index";

/*services*/
import { TransactionsService } from "@services/transactions.service";

const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

const transactionsService = new TransactionsService();
const tokenAuth = new TokenAuth();

const TransactionProvider = ({ children }: ProviderProps) => {
  const validateTransaction = useCallback(
    async (
      transactionData: ValidTransactionFormValues,
      config: MessageConfig,
      reset: UseFormReset<ValidTransactionFormValues>
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      const { loadingConfig, toastConfig } = config;
      if (token) {
        try {
          loadingConfig.setMessage("Validando transacción...");
          loadingConfig.activeLoading();
          const res = await transactionsService.validateTransaction(
            transactionData,
            token
          );
          toastConfig.showToast();
          toastConfig.configToast(res.typeStatus, res.message);
          reset();
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          toastConfig.showToast();
          toastConfig.configToast(ToastTypes.error, errorMessage);
        } finally {
          toastConfig.hideToast(3000);
          loadingConfig.inactiveLoading();
        }
      }
    },
    []
  );

  const invalidateTransaction = useCallback(
    async (transactionHash: string, config: MessageConfig): Promise<void> => {
      const token = tokenAuth.getToken();
      const { loadingConfig, toastConfig } = config;
      if (token) {
        try {
          loadingConfig.setMessage("Invalidando transacción...");
          loadingConfig.activeLoading();
          const res = await transactionsService.invalidateTransaction(
            transactionHash,
            token
          );
          toastConfig.showToast();
          toastConfig.configToast(res.typeStatus, res.message);
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          toastConfig.showToast();
          toastConfig.configToast(ToastTypes.error, errorMessage);
        } finally {
          toastConfig.hideToast(3000);
          loadingConfig.inactiveLoading();
        }
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      validateTransaction,
      invalidateTransaction,
    }),
    [validateTransaction, invalidateTransaction]
  );

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider };
export default TransactionContext;
