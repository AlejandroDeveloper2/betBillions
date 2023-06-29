import { useState, createContext, useMemo, useCallback } from "react";
import { decodeToken } from "react-jwt";
import { useLocation } from "react-router-dom";

import {
  AuthContextType,
  AuthStatus,
  LoginFormValues,
  MessageConfig,
  ProviderProps,
  RecoverPassFormValues,
  RegisterFormValues,
  ToastTypes,
  UpdatePassFormValues,
  UserAuth,
} from "../types";

/*services*/
import { UserAuthentication } from "../services/authentication.service";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const authService = new UserAuthentication();

const AuthProvider = ({ children }: ProviderProps) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("not-authenticated");
  const [userAuth, setUserAuth] = useState<UserAuth | null>(null);
  const location = useLocation();

  const login = useCallback(
    async (
      userCredentials: LoginFormValues,
      config: MessageConfig
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      try {
        loadingConfig.setMessage("Validando credenciales...");
        loadingConfig.activeLoading();
        const res = await authService.authenticateUser(userCredentials);
        if (res.token) {
          const userAuth = decodeToken<UserAuth>(res.token);
          window.localStorage.setItem("token", res.token);
          setUserAuth(userAuth);
          setAuthStatus("authenticated");
        }
        toastConfig.configToast(res.typeStatus, res.message);
        toastConfig.showToast();
        loadingConfig.inactiveLoading();
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

  const logout = (): void => {
    setUserAuth(null);
    setAuthStatus("not-authenticated");
  };

  const createUserAccount = useCallback(
    async (
      userData: RegisterFormValues,
      config: MessageConfig
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      try {
        loadingConfig.setMessage("Creando cuenta...");
        loadingConfig.activeLoading();
        const res = await authService.registerUser(userData);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
        loadingConfig.inactiveLoading();
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

  const recoverPassword = useCallback(
    async (
      userRequestData: RecoverPassFormValues,
      config: MessageConfig
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      try {
        loadingConfig.setMessage("Enviando solicitud...");
        loadingConfig.activeLoading();
        const res = await authService.sendRecoverPassRequest(userRequestData);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
        loadingConfig.inactiveLoading();
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

  const changeUserPassword = useCallback(
    async (
      userNewPassword: UpdatePassFormValues,
      config: MessageConfig
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = location.pathname.split("/")[2];
      try {
        loadingConfig.setMessage("Actualizando clave...");
        loadingConfig.activeLoading();
        const res = await authService.updatePassword(userNewPassword, token);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
        loadingConfig.inactiveLoading();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        toastConfig.showToast();
        toastConfig.configToast(ToastTypes.error, errorMessage);
      } finally {
        toastConfig.hideToast(3000);
        loadingConfig.inactiveLoading();
      }
    },
    [location.pathname]
  );

  const value = useMemo(
    () => ({
      authStatus,
      userAuth,
      login,
      logout,
      createUserAccount,
      recoverPassword,
      changeUserPassword,
    }),
    [
      authStatus,
      userAuth,
      login,
      createUserAccount,
      recoverPassword,
      changeUserPassword,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
