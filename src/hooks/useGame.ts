import { useEffect, useState } from "react";
import useSWR from "swr";

import { BingoService } from "@services/bingo.service";
import { TokenAuth } from "@utils/index";
import { BingoBoard } from "types";

const bingoService = new BingoService();
const tokenAuth = new TokenAuth();

const useGame = () => {
  const token = tokenAuth.getToken();
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);
  const [round, setRound] = useState<number | string>("?");
  const [gameMode, setGameMode] = useState<string | null>(null);
  const [currentBall, setCurrentBall] = useState<string>("?");
  const [showedBalls, setShowedBalls] = useState<string[]>([]);

  const { data: bingoRound } = useSWR(
    "/lottery/start/round",
    () => {
      if (token) {
        return bingoService.startGame(lotteryId, token);
      }
    },
    { refreshInterval: 10000 }
  );

  useEffect(() => {
    if (bingoRound) {
      setRound(bingoRound.numberRound);
      setGameMode(bingoRound.typeGame);
      setCurrentBall(bingoRound.balls[bingoRound.balls.length - 1]);
      setShowedBalls(bingoRound.balls);
    }
  }, [bingoRound]);

  const getIsUserWinner = (playerBoard: BingoBoard | null): boolean => {
    let activeBalls: number = 0;
    playerBoard?.card.forEach((ball) => {
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
    getIsUserWinner,
  };
};

export default useGame;
