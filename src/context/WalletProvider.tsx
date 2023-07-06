import { useState, createContext, useMemo, useCallback } from "react";
import { UseFormReset } from "react-hook-form";

import {
  MessageConfig,
  ProviderProps,
  ToastTypes,
  WalletContextType,
  WalletData,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
} from "../types";
import { TokenAuth } from "../utils";

/*services*/
import { UserWalletService } from "../services/userWallet.service";

const WalletContext = createContext<WalletContextType>({} as WalletContextType);

const userWalletService = new UserWalletService();
const tokenAuth = new TokenAuth();

const WalletProvider = ({ children }: ProviderProps) => {
  const [wallet, setWallet] = useState<WalletData>({
    red: "",
    balance: 0,
    wallet: null,
    state: false,
    currency: "",
  });
  const [transactionVoucher, setTransactionVoucher] = useState<string>("");

  const getUserWalletData = useCallback(
    async (config: MessageConfig): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          loadingConfig.setMessage("Cargando wallet...");
          loadingConfig.activeLoading();
          const res = await userWalletService.getUserWalletData(token);
          setWallet(res);
          toastConfig.configToast(
            res.wallet ? ToastTypes.success : ToastTypes.warning,
            res.wallet
              ? "Wallet cargada satisfactoriamente!"
              : "No tienes una wallet registrada!"
          );
          toastConfig.showToast();
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

  const setUserWalletAddress = useCallback(
    async (
      walletData: WalletWithdrawFormValues,
      config: MessageConfig
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          loadingConfig.setMessage("");
          loadingConfig.activeLoading();
          const res = await userWalletService.setUserWalletAddress(
            walletData,
            token
          );
          toastConfig.configToast(res.typeStatus, res.message);
          toastConfig.showToast();
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

  const sendWalletDepositTransaction = useCallback(
    async (
      walletData: WalletDepositFormValues,
      config: MessageConfig,
      reset: UseFormReset<WalletDepositFormValues>
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          loadingConfig.setMessage("Enviando solicitud de deposito..");
          loadingConfig.activeLoading();
          const res = await userWalletService.sendWalletDepositTransaction(
            walletData,
            token
          );
          reset();
          toastConfig.configToast(res.typeStatus, res.message);
          toastConfig.showToast();
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

  const uploadTransactionVoucher = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      config: MessageConfig
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const files = e.target.files;
      const formData = new FormData();
      if (files) {
        formData.append("file", files[0]);
        formData.append("upload_preset", "uploadTransactionVoucher");
      }
      try {
        loadingConfig.setMessage("");
        loadingConfig.activeLoading();
        const res = await userWalletService.uploadTransactionVoucher(formData);
        setTransactionVoucher(res);
        toastConfig.configToast(
          ToastTypes.success,
          "Comprobante subido correctamente!"
        );
        toastConfig.showToast();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        toastConfig.showToast();
        toastConfig.configToast(ToastTypes.error, errorMessage);
      } finally {
        toastConfig.hideToast(3000);
        loadingConfig.inactiveLoading();
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      wallet,
      transactionVoucher,
      getUserWalletData,
      setUserWalletAddress,
      sendWalletDepositTransaction,
      uploadTransactionVoucher,
    }),
    [
      wallet,
      transactionVoucher,
      getUserWalletData,
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
