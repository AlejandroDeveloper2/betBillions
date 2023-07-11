import { useState, createContext, useMemo } from "react";

import { ProviderProps, ToastTypes, ToastContextType } from "types";

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

const ToastProvider = ({ children }: ProviderProps) => {
  const [isToastVisible, setIsToastVisible] = useState<boolean | string>(false);
  const [toast, setToast] = useState<{
    toastMessage: string | null;
    toastType: ToastTypes | null;
  }>({
    toastMessage: null,
    toastType: null,
  });

  const showToast = (): void => {
    setIsToastVisible(true);
  };

  const hideToast = (delay = 0): void => {
    setTimeout(() => {
      setIsToastVisible(false);
    }, delay);
  };

  const getToastColor = (): string => {
    const style =
      toast.toastType === "Error"
        ? "var(--error)"
        : toast.toastType === "Success"
        ? "var(--success)"
        : "var(--orange)";
    return style;
  };

  const configToast = (type: ToastTypes, message: string): void => {
    setToast({ toastMessage: message, toastType: type });
  };

  const value = useMemo(
    () => ({
      isToastVisible,
      toast,
      showToast,
      hideToast,
      getToastColor,
      configToast,
    }),
    [isToastVisible, toast, showToast, hideToast, getToastColor, configToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export { ToastProvider };
export default ToastContext;
