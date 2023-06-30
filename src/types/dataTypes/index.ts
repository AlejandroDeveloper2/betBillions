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

type RoleType = "ROLE_USER" | "ROLE_ADMIN";

interface UserAuth {
  username: string;
  fullName: string;
  status: boolean;
  roles: RoleType;
  refLink: string;
}

export type {
  AuthStatus,
  ApiName,
  ServerResponse,
  LoginServerResponse,
  MessageConfig,
  ToastConfig,
  UserAuth,
};
