import { useState } from "react";

import { ToastTypes } from "../types";

const useToast = () => {
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
        : "var(--pink)";
    return style;
  };

  const configToast = (type: ToastTypes, message: string): void => {
    setToast({ toastMessage: message, toastType: type });
  };

  return {
    isToastVisible,
    toast,
    showToast,
    hideToast,
    getToastColor,
    configToast,
  };
};

export default useToast;
