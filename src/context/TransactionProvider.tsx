import { createContext, useMemo, useCallback } from "react";
import { UseFormReset } from "react-hook-form";

import {
  LoadingConfig,
  ProviderProps,
  ToastTypes,
  TransactionContextType,
  ValidTransactionFormValues,
} from "types";
import { TokenAuth } from "@utils/index";
import { useToastContext } from "@hooks/index";

/*services*/
import { TransactionsService } from "@services/transactions.service";

const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

const transactionsService = new TransactionsService();
const tokenAuth = new TokenAuth();

const TransactionProvider = ({ children }: ProviderProps) => {
  const { showToast, hideToast, configToast } = useToastContext();

  const validateTransaction = useCallback(
    async (
      transactionData: ValidTransactionFormValues,
      config: LoadingConfig,
      reset: UseFormReset<ValidTransactionFormValues>
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Validando transacción...");
          config.activeLoading();
          const res = await transactionsService.validateTransaction(
            transactionData,
            token
          );
          showToast();
          configToast(res.typeStatus, res.message);
          reset();
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          showToast();
          configToast(ToastTypes.error, errorMessage);
        } finally {
          hideToast(3000);
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const invalidateTransaction = useCallback(
    async (transactionHash: string, config: LoadingConfig): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Invalidando transacción...");
          config.activeLoading();
          const res = await transactionsService.invalidateTransaction(
            transactionHash,
            token
          );
          showToast();
          configToast(res.typeStatus, res.message);
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          showToast();
          configToast(ToastTypes.error, errorMessage);
        } finally {
          hideToast(3000);
          config.inactiveLoading();
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
