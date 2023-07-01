import {
  AuthStatus,
  LoginFormValues,
  MessageConfig,
  RecoverPassFormValues,
  RegisterFormValues,
  UpdatePassFormValues,
  UserAuth,
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
    config: MessageConfig
  ) => Promise<void>;
  logout: () => void;
  createUserAccount: (
    userData: RegisterFormValues,
    config: MessageConfig
  ) => Promise<void>;
  recoverPassword: (
    userRequestData: RecoverPassFormValues,
    config: MessageConfig
  ) => Promise<void>;
  changeUserPassword: (
    userNewPassword: UpdatePassFormValues,
    config: MessageConfig
  ) => Promise<void>;
  activateUserAccount: (config: MessageConfig) => Promise<void>;
  validateUserAuth: () => Promise<void>;
}

export type { AuthContextType, ProviderProps };
