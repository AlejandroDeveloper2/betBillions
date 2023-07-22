import { useState, createContext, useMemo, useCallback } from "react";
import { UseFormReset } from "react-hook-form";

import {
  LoadingConfig,
  ProviderProps,
  ToastTypes,
  WalletContextType,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
} from "types";
import { TokenAuth } from "@utils/index";
import { useToastContext } from "@hooks/index";

/*services*/
import { UserWalletService } from "@services/userWallet.service";

const WalletContext = createContext<WalletContextType>({} as WalletContextType);

const userWalletService = new UserWalletService();
const tokenAuth = new TokenAuth();

const WalletProvider = ({ children }: ProviderProps) => {
  const [transactionVoucher, setTransactionVoucher] = useState<string>("");

  const { openToast } = useToastContext();

  const setUserWalletAddress = useCallback(
    async (
      walletData: WalletWithdrawFormValues,
      config: LoadingConfig
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("");
          config.activeLoading();
          const res = await userWalletService.setUserWalletAddress(
            walletData,
            token
          );
          openToast({
            message: res.message,
            type: res.typeStatus,
            isToastVisible: true,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
            isToastVisible: true,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const sendWalletDepositTransaction = useCallback(
    async (
      walletData: WalletDepositFormValues,
      config: LoadingConfig,
      reset: UseFormReset<WalletDepositFormValues>
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Enviando solicitud de deposito..");
          config.activeLoading();
          const res = await userWalletService.sendWalletDepositTransaction(
            walletData,
            token
          );
          reset();
          setTransactionVoucher("");
          openToast({
            message: res.message,
            type: res.typeStatus,
            isToastVisible: true,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
            isToastVisible: true,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const uploadTransactionVoucher = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      config: LoadingConfig
    ): Promise<void> => {
      const files = e.target.files;
      const formData = new FormData();
      if (files) {
        formData.append("file", files[0]);
        formData.append("upload_preset", "uploadTransactionVoucher");
      }
      try {
        config.setMessage("");
        config.activeLoading();
        const res = await userWalletService.uploadTransactionVoucher(formData);
        setTransactionVoucher(res);
        openToast({
          message: "Comprobante subido correctamente!",
          type: ToastTypes.success,
          isToastVisible: true,
        });
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
          isToastVisible: true,
        });
      } finally {
        config.inactiveLoading();
      }
    },
    []
  );

  const sendCommissionTransaction = useCallback(
    async (
      transactionData: WalletDepositFormValues,
      config: LoadingConfig,
      reset: UseFormReset<WalletDepositFormValues>
    ) => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Enviando solicitud de deposito..");
          config.activeLoading();
          const res = await userWalletService.sendCommissionTransaction(
            transactionData,
            token
          );
          reset();
          setTransactionVoucher("");
          openToast({
            message: res.message,
            type: res.typeStatus,
            isToastVisible: true,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
            isToastVisible: true,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      transactionVoucher,
      setUserWalletAddress,
      sendWalletDepositTransaction,
      uploadTransactionVoucher,
      sendCommissionTransaction,
    }),
    [
      transactionVoucher,
      setUserWalletAddress,
      sendWalletDepositTransaction,
      uploadTransactionVoucher,
      sendCommissionTransaction,
    ]
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletProvider };
export default WalletContext;
