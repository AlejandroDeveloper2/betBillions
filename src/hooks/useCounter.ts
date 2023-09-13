import { useState, useEffect } from "react";

const useCounter = <T>(dependency: T): string => {
  const [seconds, setSeconds] = useState<number>(10);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeconds((prevState) => {
        if (prevState > 0) {
          return prevState - 1;
        }
        if (prevState === 0) {
          return 10;
        }
        return prevState;
      });
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, [dependency]);

  const counter: string = seconds < 10 ? `0${seconds}` : seconds.toString();
  return counter;
};
export default useCounter;
