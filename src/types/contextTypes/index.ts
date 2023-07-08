import { UseFormReset } from "react-hook-form";
import {
  AuthStatus,
  LoginFormValues,
  LotteryDetail,
  LotteryListItem,
  MessageConfig,
  RecoverPassFormValues,
  RegisterFormValues,
  UpdatePassFormValues,
  UserAuth,
  UserPanelData,
  ValidTransactionFormValues,
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
}

interface WalletContextType {
  transactionVoucher: string;
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

interface LotteryContextType {
  reffels: LotteryListItem[];
  lotteryDetail: LotteryDetail | null;
  getAllBingoReffels: (config: MessageConfig) => Promise<void>;
  getBingoReffel: (lotteryId: number, config: MessageConfig) => Promise<void>;
}

interface TransactionContextType {
  validateTransaction: (
    transactionData: ValidTransactionFormValues,
    config: MessageConfig,
    reset: UseFormReset<ValidTransactionFormValues>
  ) => Promise<void>;
  invalidateTransaction: (
    transactionHash: string,
    config: MessageConfig
  ) => Promise<void>;
}

export type {
  AuthContextType,
  ProviderProps,
  UserProfileContextType,
  WalletContextType,
  LotteryContextType,
  TransactionContextType,
};
