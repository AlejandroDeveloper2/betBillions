import { useState, createContext, useMemo } from "react";
import { IconType } from "react-icons";

import { BiSolidErrorAlt } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosWarning } from "react-icons/io";

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
    window.setTimeout(() => {
      setToasts((prevState) => prevState.slice(1));
    }, timeout);
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

  const getToastIcon = (type: ToastTypes): IconType => {
    const Icon =
      type === "Error"
        ? BiSolidErrorAlt
        : type === "Success"
        ? AiFillCheckCircle
        : IoIosWarning;
    return Icon;
  };

  const value = useMemo(
    () => ({
      toasts,
      openToast,
      closeToast,
      getToastColor,
      getToastIcon,
    }),
    [toasts, openToast, closeToast, getToastColor, getToastIcon]
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
