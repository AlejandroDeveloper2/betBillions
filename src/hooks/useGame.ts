import { useEffect, useState } from "react";

import { BingoService } from "@services/bingo.service";
import { useBingoContext, useRealTimeFecher } from ".";

const bingoService = new BingoService();

const useGame = () => {
  const lotteryKey = window.location.pathname.split("/")[4];
  const [round, setRound] = useState<number | string>("?");
  const [gameMode, setGameMode] = useState<string | null>(null);
  const [currentBall, setCurrentBall] = useState<string>("?");
  const [showedBalls, setShowedBalls] = useState<string[]>([]);
  const [roundId, setRoundId] = useState<number>(1);

  const { getPlayerBoard, playerBoard } = useBingoContext();

  const { data: bingoRound } = useRealTimeFecher(
    "/lottery/start/round",
    (token) => bingoService.startGame(lotteryKey, token),
    10000
  );

  useEffect(() => {
    if (bingoRound) {
      getPlayerBoard(lotteryKey, bingoRound.id);
    }
  }, [bingoRound]);

  useEffect(() => {
    if (bingoRound) {
      setRound(bingoRound.numberRound);
      setGameMode(bingoRound.typeGame);
      setCurrentBall(bingoRound.balls[bingoRound.balls.length - 1]);
      setShowedBalls(bingoRound.balls);
      setRoundId(bingoRound.id);
    }
  }, [bingoRound]);

  const getIsUserWinner = (): boolean => {
    let activeBalls: number = 0;
    playerBoard?.card?.forEach((ball) => {
      if (ball.state) activeBalls++;
    });
    const isUserWinner = activeBalls === 9 ? false : true;
    return isUserWinner;
  };

  return {
    round,
    gameMode,
    currentBall,
    showedBalls,
    bingoRound,
    roundId,
    getIsUserWinner,
  };
};

export default useGame;
