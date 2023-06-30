import { useState, createContext, useMemo, useCallback } from "react";
import { decodeToken } from "react-jwt";
import { useLocation, useNavigate } from "react-router-dom";

import {
  AuthContextType,
  AuthStatus,
  LoginFormValues,
  MessageConfig,
  ProviderProps,
  RecoverPassFormValues,
  RegisterFormValues,
  ToastConfig,
  ToastTypes,
  UpdatePassFormValues,
  UserAuth,
} from "../types";
import { TokenAuth, UserAuthState, UserSession } from "../utils";

/*services*/
import { UserAuthentication } from "../services/authentication.service";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const authService = new UserAuthentication();
const tokenAuth = new TokenAuth();
const userAuthStateLS = new UserAuthState();
const userSessionLS = new UserSession();

const AuthProvider = ({ children }: ProviderProps) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(
    userAuthStateLS.getUserAuthState()
  );
  const [userAuth, setUserAuth] = useState<UserAuth | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

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
          tokenAuth.setToken(res.token);
          setUserAuth(userAuth);
          setAuthStatus("authenticated");
          userAuthStateLS.setUserAuthState("authenticated");
        }
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
    },
    []
  );

  const logout = useCallback((delay = 0): void => {
    setTimeout(() => {
      setUserAuth(null);
      tokenAuth.removeToken();
      setAuthStatus("not-authenticated");
      userAuthStateLS.removeUserAuthState();
      userSessionLS.removeSessionTime();
    }, delay);
  }, []);

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
      const token = tokenAuth.getUrlToken(location);
      try {
        loadingConfig.setMessage("Actualizando clave...");
        loadingConfig.activeLoading();
        const res = await authService.updatePassword(userNewPassword, token);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        toastConfig.showToast();
        toastConfig.configToast(ToastTypes.error, errorMessage);
      } finally {
        toastConfig.hideToast(3000);
        loadingConfig.inactiveLoading();
      }
    },
    [location]
  );

  const activateUserAccount = useCallback(
    async (config: MessageConfig): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getUrlToken(location);
      try {
        loadingConfig.setMessage("Verificando cuenta...");
        loadingConfig.activeLoading();
        const res = await authService.activateUserAccount(token);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        toastConfig.showToast();
        toastConfig.configToast(ToastTypes.error, errorMessage);
      } finally {
        toastConfig.hideToast(3000);
        loadingConfig.inactiveLoading();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    },
    [location, navigate]
  );

  const validateUserAuth = useCallback(
    async (config: ToastConfig): Promise<void> => {
      const { hideToast, showToast, configToast } = config;
      const token = tokenAuth.getToken();
      setAuthStatus("checking");
      userAuthStateLS.setUserAuthState("checking");
      try {
        if (token) {
          const res = await authService.validateUserAuth(token);
          if (res) {
            const userAuth = decodeToken<UserAuth>(token);
            setAuthStatus("authenticated");
            userAuthStateLS.setUserAuthState("authenticated");
            setUserAuth(userAuth);
          } else {
            showToast();
            configToast(
              ToastTypes.warning,
              "La sesión a caducado por favor loguese de nuevo!"
            );
            logout(3000);
          }
        } else {
          setAuthStatus("not-authenticated");
          userAuthStateLS.removeUserAuthState();
        }
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
      }
    },
    [logout]
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
      activateUserAccount,
      validateUserAuth,
    }),
    [
      authStatus,
      userAuth,
      login,
      logout,
      createUserAccount,
      recoverPassword,
      changeUserPassword,
      activateUserAccount,
      validateUserAuth,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
