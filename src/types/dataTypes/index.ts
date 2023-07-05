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

interface LoadingConfig {
  activeLoading: () => void;
  inactiveLoading: (delay?: number) => void;
  setMessage: (message: string) => void;
}

interface ToastConfig {
  showToast: () => void;
  hideToast: (delay?: number) => void;
  configToast: (type: ToastTypes, message: string) => void;
}

interface MessageConfig {
  loadingConfig: LoadingConfig;
  toastConfig: ToastConfig;
}

type RoleType = { authority: "ROLE_USER" | "ROLE_ADMIN" };

interface UserAuth {
  sub: string;
  fullName: string;
  state: boolean;
  roles: RoleType[];
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

export type {
  AuthStatus,
  ApiName,
  ServerResponse,
  LoginServerResponse,
  MessageConfig,
  ToastConfig,
  UserAuth,
  MenuItem,
  UserPanelData,
  WalletData,
};
