import { useState, createContext, useMemo, useCallback } from "react";
import { decodeToken } from "react-jwt";
import { useLocation, useNavigate } from "react-router-dom";
import { UseFormReset } from "react-hook-form";

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
import { TokenAuth, UserAuthState } from "@utils/index";

/*services*/
import { UserAuthentication } from "@services/authentication.service";
import { useShoppingCartContext, useToast } from "@hooks/index";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const authService = new UserAuthentication();
const tokenAuth = new TokenAuth();
const userAuthStateLS = new UserAuthState();

const AuthProvider = ({ children }: ProviderProps) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(
    userAuthStateLS.getUserAuthState()
  );
  const [userAuth, setUserAuth] = useState<UserAuth | null>(
    decodeToken<UserAuth>(localStorage.getItem("token") ?? "")
  );
  const location = useLocation();
  const navigate = useNavigate();

  const { toast, configToast } = useToast();
  const { clearShoppingCart } = useShoppingCartContext();

  const login = useCallback(
    async (
      userCredentials: LoginFormValues,
      config: MessageConfig,
      reset: UseFormReset<LoginFormValues>
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
        reset();
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
      clearShoppingCart();
    }, delay);
  }, []);

  const createUserAccount = useCallback(
    async (
      userData: RegisterFormValues,
      config: MessageConfig,
      reset: UseFormReset<RegisterFormValues>
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      try {
        loadingConfig.setMessage("Creando cuenta...");
        loadingConfig.activeLoading();
        const res = await authService.registerUser(userData);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
        reset();
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
      config: MessageConfig,
      reset: UseFormReset<RecoverPassFormValues>
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      try {
        loadingConfig.setMessage("Enviando solicitud...");
        loadingConfig.activeLoading();
        const res = await authService.sendRecoverPassRequest(userRequestData);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
        reset();
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
      config: MessageConfig,
      reset: UseFormReset<UpdatePassFormValues>
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getUrlToken(location);
      try {
        loadingConfig.setMessage("Actualizando clave...");
        loadingConfig.activeLoading();
        const res = await authService.updatePassword(userNewPassword, token);
        toastConfig.showToast();
        toastConfig.configToast(res.typeStatus, res.message);
        reset();
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

  const validateUserAuth = useCallback(async (): Promise<void> => {
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
      configToast(ToastTypes.error, errorMessage);
    }
  }, [configToast, logout]);

  const value = useMemo(
    () => ({
      authStatus,
      userAuth,
      sessionValidationMessage: toast.toastMessage,
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
      toast.toastMessage,
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
