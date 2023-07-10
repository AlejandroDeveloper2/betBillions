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

  const { showToast, hideToast, configToast } = useToastContext();

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
          configToast(res.typeStatus, res.message);
          showToast();
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
          configToast(res.typeStatus, res.message);
          showToast();
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
        configToast(ToastTypes.success, "Comprobante subido correctamente!");
        showToast();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
        config.inactiveLoading();
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
    }),
    [
      transactionVoucher,
      setUserWalletAddress,
      sendWalletDepositTransaction,
      uploadTransactionVoucher,
    ]
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletProvider };
export default WalletContext;
