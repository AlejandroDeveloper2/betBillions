import { useState, createContext, useMemo, useCallback } from "react";
import { decodeToken } from "react-jwt";
import { useLocation, useNavigate } from "react-router-dom";
import { UseFormReset } from "react-hook-form";

import {
  AuthContextType,
  AuthStatus,
  LoadingConfig,
  LoginFormValues,
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
import { useShoppingCartContext, useToastContext } from "@hooks/index";

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
  const { showToast, hideToast, configToast } = useToastContext();

  const { clearShoppingCart } = useShoppingCartContext();

  const login = useCallback(
    async (
      userCredentials: LoginFormValues,
      config: LoadingConfig,
      reset: UseFormReset<LoginFormValues>
    ): Promise<void> => {
      try {
        config.setMessage("Validando credenciales...");
        config.activeLoading();
        const res = await authService.authenticateUser(userCredentials);
        if (res.token) {
          const userAuth = decodeToken<UserAuth>(res.token);
          tokenAuth.setToken(res.token);
          setUserAuth(userAuth);
          setAuthStatus("authenticated");
          userAuthStateLS.setUserAuthState("authenticated");
        }
        reset();
        configToast(res.typeStatus, res.message);
        showToast();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
        config.inactiveLoading();
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
      config: LoadingConfig,
      reset: UseFormReset<RegisterFormValues>
    ): Promise<void> => {
      try {
        config.setMessage("Creando cuenta...");
        config.activeLoading();
        const res = await authService.registerUser(userData);
        showToast();
        configToast(res.typeStatus, res.message);
        reset();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
        config.inactiveLoading();
      }
    },
    []
  );

  const recoverPassword = useCallback(
    async (
      userRequestData: RecoverPassFormValues,
      config: LoadingConfig,
      reset: UseFormReset<RecoverPassFormValues>
    ): Promise<void> => {
      try {
        config.setMessage("Enviando solicitud...");
        config.activeLoading();
        const res = await authService.sendRecoverPassRequest(userRequestData);
        showToast();
        configToast(res.typeStatus, res.message);
        reset();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
        config.inactiveLoading();
      }
    },
    []
  );

  const changeUserPassword = useCallback(
    async (
      userNewPassword: UpdatePassFormValues,
      config: LoadingConfig,
      reset: UseFormReset<UpdatePassFormValues>
    ): Promise<void> => {
      const token = tokenAuth.getUrlToken(location);
      try {
        config.setMessage("Actualizando clave...");
        config.activeLoading();
        const res = await authService.updatePassword(userNewPassword, token);
        showToast();
        configToast(res.typeStatus, res.message);
        reset();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
        config.inactiveLoading();
      }
    },
    [location]
  );

  const activateUserAccount = useCallback(
    async (config: LoadingConfig): Promise<void> => {
      const token = tokenAuth.getUrlToken(location);
      try {
        config.setMessage("Verificando cuenta...");
        config.activeLoading();
        const res = await authService.activateUserAccount(token);
        showToast();
        configToast(res.typeStatus, res.message);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
        config.inactiveLoading();
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
      configToast(ToastTypes.error, errorMessage);
      showToast();
    } finally {
      hideToast(3000);
    }
  }, [configToast, logout]);

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
