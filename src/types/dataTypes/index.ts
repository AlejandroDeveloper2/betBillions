import { IconType } from "react-icons";

import { ToastTypes } from "..";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";
type ApiName =
  | "betBillionsAPI"
  | "countriesAPI"
  | "ipAddressAPI"
  | "cloudinaryAPI";

interface ServerResponse {
  typeStatus: ToastTypes;
  message: string;
}

interface LoginServerResponse extends ServerResponse {
  token: string | null;
}

interface ToastConfig {
  showToast: () => void;
  hideToast: (delay?: number) => void;
  configToast: (type: ToastTypes, message: string) => void;
}

interface LoadingConfig {
  activeLoading: () => void;
  inactiveLoading: (delay?: number) => void;
  setMessage: (message: string) => void;
}

type RoleType = { authority: "ROLE_USER" | "ROLE_ADMIN" };

interface UserAuth {
  sub: string;
  fullName: string;
  state: boolean;
  roles: RoleType[];
  exp: number;
}

interface MenuItem {
  label: string;
  icon: string | IconType;
  title: string;
  to: string;
  onClick?: () => void;
}

interface UserPanelData {
  link: string;
  balance: number;
  awards: number;
  reference: number;
}

interface WalletData {
  red: string;
  balance: number;
  wallet: string | null;
  state: boolean;
  currency: string;
}

interface LotteryListItem {
  id: number;
  key: string;
  startDate: string;
  numberOfRounds: number;
  state: boolean;
}

interface LotteryDetail extends LotteryListItem {
  rounds: LotteryRound[];
}

interface LotteryRound {
  id: number;
  idLottery: number | null;
  typeGame: string;
  numberRound: number;
  award: number;
  userWinner: string | null;
  completed: boolean;
}

interface UserTransaction {
  id: number;
  balance: number;
  typeHistory: "Shopping" | "Earnings" | "Transaction" | "Commission";
  state: boolean;
  createdAt: string;
}

interface AdminTransaction {
  id: number;
  walletType: string;
  transaction: string;
  price: number | null;
  currency: string;
  urlTransaction: string;
  userId: null | number;
  stateTransaction: "Pending" | "Completed" | "Invalid";
  state: boolean;
  typeTransaction: "Recharge" | "UserNetwork";
  createdAt: string;
  username: string;
  email: string;
}

type HeaderType = {
  Icon: IconType;
  label: string;
};

interface Team {
  id: number;
  userName: string;
  dateRegistered: string;
  level: string;
}

interface BingoBoard {
  id: string;
  key: string;
  userId: number;
  lotteryId: number;
  card: BingoBall[];
  round: number;
  state: number;
}

interface BingoBall {
  numbers: string;
  state: boolean;
  color: string;
}

interface UserProfileData {
  username: string;
  email: string;
  fullName: string;
  phone: string;
  country: string;
  city: string;
  photo: string;
  invitationLink: string;
  evoxWallet: string;
}

interface UserAdminData extends UserProfileData {
  id: number;
  emailVerified: string;
  refLink: string;
  roles: string;
  status: boolean;
  level: number;
  createdAt: string;
  updatedAt: string;
}

interface Country {
  id: number;
  name: string;
}

interface City extends Country {
  country_name: string;
}

interface SupportRequest {
  id: number;
  ticket: string;
  category: string;
  question: string;
  answer: string;
  userId: number;
  urlPhoto?: string;
  state: "Reply" | "Pending";
  createdAt: string;
  updateAt: string;
  username: string;
  email: string;
}

interface BingoRound {
  id: number;
  idLottery: number;
  typeGame: string;
  numberRound: number;
  award: number;
  balls: string[];
  userWinner: string | null;
  completed: boolean;
}

export type {
  AuthStatus,
  ApiName,
  ServerResponse,
  LoginServerResponse,
  LoadingConfig,
  ToastConfig,
  UserAuth,
  MenuItem,
  UserPanelData,
  WalletData,
  LotteryListItem,
  LotteryDetail,
  LotteryRound,
  UserTransaction,
  AdminTransaction,
  HeaderType,
  Team,
  BingoBoard,
  BingoBall,
  UserProfileData,
  UserAdminData,
  Country,
  City,
  SupportRequest,
  BingoRound,
};
