import { useEffect, useState } from "react";

import { useBingoContext } from "@hooks/index";

const useGame = () => {
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);
  const { bingoRound, startGame } = useBingoContext();
  const [round, setRound] = useState<number | string>("?");
  const [gameMode, setGameMode] = useState<string | null>(null);
  const [currentBall, setCurrentBall] = useState<string>("?");

  useEffect(() => {
    const interval = window.setInterval(() => {
      startGame(lotteryId);
    }, 10000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (bingoRound) {
      setRound(bingoRound.numberRound);
      setGameMode(bingoRound.typeGame);
      setCurrentBall(bingoRound.balls[bingoRound.balls.length - 1]);
    }
  }, [bingoRound]);

  return {
    round,
    gameMode,
    currentBall,
  };
};

export default useGame;
