import { useState, useEffect } from "react";

const useScreenLoader = (): boolean => {
  const [isScreenLoading, setIsScreenLoading] = useState<boolean>(false);

  const showLoadingScreen = (): void => {
    setIsScreenLoading(true);
  };

  const hideLoadingScreen = (delay: number): void => {
    setTimeout(() => {
      setIsScreenLoading(false);
    }, delay);
  };

  useEffect(() => {
    showLoadingScreen();
    hideLoadingScreen(3000);
  }, []);

  return isScreenLoading;
};
export default useScreenLoader;
