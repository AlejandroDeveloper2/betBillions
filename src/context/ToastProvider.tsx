import { useState, createContext, useMemo } from "react";

import {
  ProviderProps,
  ToastTypes,
  ToastContextType,
  ToastType,
  ToastsConfig,
} from "types";

import { Toast } from "@components/index";
import { ToastsContainer } from "@styles/GlobalStyles.style";

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

const ToastProvider = ({ children }: ProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const openToast = (config: ToastsConfig, timeout = 4000) => {
    const id = window.Date.now().toString();
    setToasts((prevState) => {
      const newState = [
        ...prevState,
        {
          Component: () => <Toast id={id} {...config} />,
          id,
        },
      ];
      return newState;
    });
    window.setTimeout(() => closeToast(id), timeout);
  };

  const closeToast = (id: string): void => {
    const filteredToasts = toasts.filter(
      (toastElement) => toastElement.id !== id
    );
    setToasts(filteredToasts);
  };

  const getToastColor = (type: ToastTypes): string => {
    const style =
      type === "Error"
        ? "var(--error)"
        : type === "Success"
        ? "var(--success)"
        : "var(--orange)";
    return style;
  };

  const value = useMemo(
    () => ({
      toasts,
      openToast,
      closeToast,
      getToastColor,
    }),
    [toasts, openToast, closeToast, getToastColor]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastsContainer>
        {toasts.map((toast) => (
          <toast.Component key={toast.id} />
        ))}
      </ToastsContainer>
    </ToastContext.Provider>
  );
};

export { ToastProvider };
export default ToastContext;
