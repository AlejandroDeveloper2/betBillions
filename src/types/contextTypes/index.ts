import { UseFormReset } from "react-hook-form";
import {
  AuthStatus,
  LoginFormValues,
  MessageConfig,
  RecoverPassFormValues,
  RegisterFormValues,
  UpdatePassFormValues,
  UserAuth,
  UserPanelData,
  WalletData,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
} from "..";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface AuthContextType {
  authStatus: AuthStatus;
  userAuth: UserAuth | null;
  sessionValidationMessage: string | null;
  login: (
    userCredentials: LoginFormValues,
    config: MessageConfig,
    reset: UseFormReset<LoginFormValues>
  ) => Promise<void>;
  logout: () => void;
  createUserAccount: (
    userData: RegisterFormValues,
    config: MessageConfig,
    reset: UseFormReset<RegisterFormValues>
  ) => Promise<void>;
  recoverPassword: (
    userRequestData: RecoverPassFormValues,
    config: MessageConfig,
    reset: UseFormReset<RecoverPassFormValues>
  ) => Promise<void>;
  changeUserPassword: (
    userNewPassword: UpdatePassFormValues,
    config: MessageConfig,
    reset: UseFormReset<UpdatePassFormValues>
  ) => Promise<void>;
  activateUserAccount: (config: MessageConfig) => Promise<void>;
  validateUserAuth: () => Promise<void>;
}

interface UserProfileContextType {
  userPanelData: UserPanelData | null;
  getUserPanelData: (config: MessageConfig) => Promise<void>;
}

interface WalletContextType {
  wallet: WalletData | null;
  transactionVoucher: string;
  getUserWalletData: (config: MessageConfig) => Promise<void>;
  setUserWalletAddress: (
    walletData: WalletWithdrawFormValues,
    config: MessageConfig
  ) => Promise<void>;
  sendWalletDepositTransaction: (
    walletData: WalletDepositFormValues,
    config: MessageConfig,
    reset: UseFormReset<WalletDepositFormValues>
  ) => Promise<void>;
  uploadTransactionVoucher: (
    e: React.ChangeEvent<HTMLInputElement>,
    config: MessageConfig
  ) => Promise<void>;
}

export type {
  AuthContextType,
  ProviderProps,
  UserProfileContextType,
  WalletContextType,
};
