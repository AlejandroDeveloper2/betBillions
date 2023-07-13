import { UseFormReset } from "react-hook-form";
import {
  AuthStatus,
  BingoBoard,
  City,
  Country,
  LoadingConfig,
  LoginFormValues,
  LotteryDetail,
  LotteryListItem,
  RecoverPassFormValues,
  RegisterFormValues,
  ToastTypes,
  UpdatePassFormValues,
  UserAuth,
  UserProfileFormValues,
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
  login: (
    userCredentials: LoginFormValues,
    config: LoadingConfig,
    reset: UseFormReset<LoginFormValues>
  ) => Promise<void>;
  logout: () => void;
  createUserAccount: (
    userData: RegisterFormValues,
    config: LoadingConfig,
    reset: UseFormReset<RegisterFormValues>
  ) => Promise<void>;
  recoverPassword: (
    userRequestData: RecoverPassFormValues,
    config: LoadingConfig,
    reset: UseFormReset<RecoverPassFormValues>
  ) => Promise<void>;
  changeUserPassword: (
    userNewPassword: UpdatePassFormValues,
    config: LoadingConfig,
    reset: UseFormReset<UpdatePassFormValues>
  ) => Promise<void>;
  activateUserAccount: (config: LoadingConfig) => Promise<void>;
  validateUserAuth: () => Promise<void>;
}

interface UserProfileContextType {
  userPhotoUrl: string;
  updateUserProfile: (
    userData: UserProfileFormValues,
    config: LoadingConfig
  ) => Promise<void>;
  uploadUserProfilePhoto: (
    e: React.ChangeEvent<HTMLInputElement>,
    config: LoadingConfig
  ) => Promise<void>;
}

interface WalletContextType {
  transactionVoucher: string;
  setUserWalletAddress: (
    walletData: WalletWithdrawFormValues,
    config: LoadingConfig
  ) => Promise<void>;
  sendWalletDepositTransaction: (
    walletData: WalletDepositFormValues,
    config: LoadingConfig,
    reset: UseFormReset<WalletDepositFormValues>
  ) => Promise<void>;
  uploadTransactionVoucher: (
    e: React.ChangeEvent<HTMLInputElement>,
    config: LoadingConfig
  ) => Promise<void>;
  sendCommissionTransaction: (
    transactionData: WalletDepositFormValues,
    config: LoadingConfig,
    reset: UseFormReset<WalletDepositFormValues>
  ) => Promise<void>;
}

interface LotteryContextType {
  reffels: LotteryListItem[];
  lotteryDetail: LotteryDetail | null;
  randomBingoBoards: BingoBoard[];
  userBingoBoards: BingoBoard[];
  getAllBingoReffels: (config: LoadingConfig) => Promise<void>;
  getBingoReffel: (lotteryId: number, config: LoadingConfig) => Promise<void>;
  getRandomBingoBoards: () => Promise<void>;
  buyBingoBoards: (
    purchaseData: BingoBoard[],
    idLottery: number,
    config: LoadingConfig
  ) => Promise<void>;
  getPurchasedUserBingoBoards: (
    idLottery: number,
    config: LoadingConfig
  ) => Promise<void>;
}

interface TransactionContextType {
  validateTransaction: (
    transactionData: ValidTransactionFormValues,
    config: LoadingConfig,
    reset: UseFormReset<ValidTransactionFormValues>
  ) => Promise<void>;
  invalidateTransaction: (
    transactionHash: string,
    config: LoadingConfig
  ) => Promise<void>;
  validateLoyaltyPlanTransaction: (
    transactionHash: string,
    config: LoadingConfig
  ) => Promise<void>;
}

interface ShoppingCartContextType {
  bingoBoards: BingoBoard[];
  totalToPay: number;
  addBingoBoardToCart: (bingoBoard: BingoBoard) => void;
  removeBingoBoardFromCart: (bingoBoardId: string) => void;
  clearShoppingCart: () => void;
}

interface ToastContextType {
  isToastVisible: boolean | string;
  toast: {
    toastMessage: string | null;
    toastType: ToastTypes | null;
  };
  showToast: () => void;
  hideToast: (delay?: number) => void;
  getToastColor: () => string;
  configToast: (type: ToastTypes, message: string) => void;
}

interface LocationContextType {
  countries: Country[];
  cities: City[];
  getCountries: () => Promise<void>;
  getCitiesPerCountry: (country: string) => Promise<void>;
}

export type {
  AuthContextType,
  ProviderProps,
  UserProfileContextType,
  WalletContextType,
  LotteryContextType,
  TransactionContextType,
  ShoppingCartContextType,
  ToastContextType,
  LocationContextType,
};
