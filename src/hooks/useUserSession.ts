import { useEffect, useCallback, useState } from "react";

import { useAuthContext } from ".";
import { ToastConfig } from "../types";
import { UserSession } from "../utils";

const userSession = new UserSession();

const useUserSession = (config: ToastConfig, sessionTimer: number): void => {
  const { showToast, hideToast, configToast } = config;
  const [sessionTimerCount, setSessionTimerCount] = useState<number>(
    userSession.getSessionTime()
  );
  const { validateUserAuth } = useAuthContext();

  const validateUserSession = useCallback((): void => {
    validateUserAuth({
      showToast,
      hideToast,
      configToast,
    });
  }, [configToast, hideToast, showToast, validateUserAuth]);

  useEffect(() => {
    if (sessionTimer === 0) {
      validateUserSession();
      return;
    }
    const interval = window.setInterval(() => {
      setSessionTimerCount((prev) => prev + 1);
      userSession.setSessionTime(sessionTimerCount);
      if (sessionTimerCount === 7200) {
        validateUserSession();
        setSessionTimerCount(0);
        userSession.removeSessionTime();
      }
    }, sessionTimer);
    return () => {
      window.clearInterval(interval);
    };
  }, [sessionTimer, sessionTimerCount, validateUserSession]);
};

export default useUserSession;
