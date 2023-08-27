import { UseFormReset } from "react-hook-form";
import {
  AuthStatus,
  BingoBoard,
  BingoRound,
  City,
  Country,
  LoadingConfig,
  LoginFormValues,
  LotteryDetail,
  LotteryFormValues,
  LotteryListItem,
  RecoverPassFormValues,
  RegisterFormValues,
  SupportAnswerFormValues,
  SupportFormValues,
  ToastType,
  ToastTypes,
  ToastsConfig,
  UpdatePassFormValues,
  UserAuth,
  UserProfileFormValues,
  ValidTransactionFormValues,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
  WithdrawFormValues,
} from "..";
import { IconType } from "react-icons";

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
  buyBingoBoards: (
    purchaseData: BingoBoard[],
    lotteryKey: string,
    config: LoadingConfig
  ) => Promise<void>;
  createLottery: (
    lotteryData: LotteryFormValues,
    config: LoadingConfig,
    reset: UseFormReset<LotteryFormValues>
  ) => Promise<void>;
  inactiveLottery: (lotteryKey: string, config: LoadingConfig) => Promise<void>;
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
  addBingoBoardToCart: (
    bingoBoard: BingoBoard,
    numberOfRounds: number,
    price: number
  ) => void;
  removeBingoBoardFromCart: (bingoBoardId: string, price: number) => void;
  clearShoppingCart: () => void;
}

interface ToastContextType {
  toasts: ToastType[];
  openToast: (config: ToastsConfig, timeout?: number) => void;
  closeToast: (id: string) => void;
  getToastColor: (type: ToastTypes) => string;
  getToastIcon: (type: ToastTypes) => IconType;
}

interface LocationContextType {
  countries: Country[];
  cities: City[];
  getCountries: () => Promise<void>;
  getCitiesPerCountry: (country: string) => Promise<void>;
}

interface SupportContextType {
  supportImage: string;
  sendUserSupportRequest: (
    requestData: SupportFormValues,
    config: LoadingConfig,
    reset: UseFormReset<SupportFormValues>
  ) => Promise<void>;
  uploadSupportImage: (
    e: React.ChangeEvent<HTMLInputElement>,
    config: LoadingConfig
  ) => Promise<void>;
  answerSupportUserRequest: (
    answerData: SupportAnswerFormValues,
    config: LoadingConfig,
    reset: UseFormReset<SupportAnswerFormValues>
  ) => Promise<void>;
}

interface BingoContextType {
  bingoRound: BingoRound | null;
  playerBoard: BingoBoard | null;
  startGame: (lotteryKey: string) => Promise<void>;
  getPlayerBoard: (lotteryKey: string, roundId: number) => Promise<void>;
  activeBingoLottery: (
    lotteryKey: string,
    roundId: number,
    config: LoadingConfig
  ) => Promise<void>;
  validateBingoBalls: (
    lotteryKey: string,
    roundId: number,
    ball: string,
    shownBall: string[],
    config: LoadingConfig
  ) => Promise<void>;
  setBingoWinner: (
    lotteryKey: string,
    roundId: number,
    config: LoadingConfig
  ) => Promise<void>;
  stopGame: (roundId: number, config: LoadingConfig) => Promise<void>;
}

interface WithdrawContextType {
  sendWithdrawRequest: (
    withdrawData: WithdrawFormValues,
    config: LoadingConfig
  ) => Promise<void>;
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
  SupportContextType,
  BingoContextType,
  WithdrawContextType,
};
