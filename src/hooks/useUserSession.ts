import { useEffect, useCallback } from "react";

import { useAuthContext } from "@hooks/index";

const useUserSession = (sessionTimer: number): void => {
  const { validateUserAuth, userAuth } = useAuthContext();

  const validateUserSession = useCallback((): void => {
    validateUserAuth();
  }, [validateUserAuth]);

  useEffect(() => {
    if (sessionTimer === 0) {
      validateUserSession();
      return;
    }
    const interval = window.setInterval(() => {
      const currentDate = window.Math.floor(Date.now() / 1000);
      const expirationDate = userAuth ? userAuth.exp : 0;
      if (currentDate >= expirationDate) {
        validateUserSession();
      }
    }, sessionTimer);
    return () => {
      window.clearInterval(interval);
    };
  }, [sessionTimer, validateUserSession]);
};

export default useUserSession;
