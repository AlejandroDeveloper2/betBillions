import { useEffect } from "react";

import { useAuthContext } from "@hooks/index";

const useUserSession = (sessionTimer: number): void => {
  const { validateUserAuth, userAuth } = useAuthContext();

  useEffect(() => {
    if (sessionTimer === 0) {
      validateUserAuth();
      return;
    }
    const interval = window.setInterval(() => {
      const currentDate = window.Math.floor(Date.now() / 1000);
      const expirationDate = userAuth ? userAuth.exp : 0;
      if (currentDate >= expirationDate) {
        validateUserAuth();
      }
    }, sessionTimer);

    return () => {
      window.clearInterval(interval);
    };
  }, [sessionTimer, validateUserAuth]);
};

export default useUserSession;
