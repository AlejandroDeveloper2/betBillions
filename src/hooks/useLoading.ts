import { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);

  const activeLoading = (): void => {
    setIsLoading(true);
  };
  const inactiveLoading = (delay = 0): void => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  };

  const setMessage = (message: string): void => {
    setLoadingMessage(message);
  };

  return {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  };
};

export default useLoading;
