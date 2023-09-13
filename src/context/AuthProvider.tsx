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
} from "types";
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
  const { openToast } = useToastContext();
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
          reset();
          return;
        }
        openToast({
          message: "Inicio de sesión exitoso!",
          type: res.typeStatus,
        });
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
        });
      } finally {
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
        openToast(
          {
            message: res.message,
            type: res.typeStatus,
          },
          4000
        );
        reset();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
        });
      } finally {
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
        openToast({
          message: res.message,
          type: res.typeStatus,
        });
        reset();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
        });
      } finally {
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
        openToast({
          message: res.message,
          type: res.typeStatus,
        });
        reset();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
        });
      } finally {
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
        openToast({
          message: res.message,
          type: res.typeStatus,
        });
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
        });
      } finally {
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
          openToast({
            message: "La sesión ha caducado por favor loguese de nuevo!",
            type: ToastTypes.warning,
          });
          logout(3000);
        }
      } else {
        setAuthStatus("not-authenticated");
        userAuthStateLS.removeUserAuthState();
      }
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      openToast({
        message: errorMessage,
        type: ToastTypes.error,
      });
    }
  }, [logout]);

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
