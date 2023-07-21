import { useState, useEffect } from "react";

import { BingoBoard } from "types";
import { setColorBingoBalls } from "@utils/index";
import { useBingoContext } from ".";

const useBingoBoard = (board: BingoBoard, showedBalls: string[]) => {
  const boardLS =
    window.localStorage.getItem("playerBingoBoard") ?? JSON.stringify(board);
  const [bingoBoard, setBingoBoard] = useState<BingoBoard>(JSON.parse(boardLS));
  const { validateBingoBalls } = useBingoContext();

  const bingoStyledBalls = setColorBingoBalls(bingoBoard);

  const toggleBall = (ball: string): void => {
    const newCard = bingoStyledBalls.map((bingoBall) => {
      if (ball === bingoBall.numbers) {
        if (showedBalls.includes(bingoBall.numbers)) {
          validateBingoBalls(bingoBoard.lotteryId, bingoBoard.round, ball);
          const newBall = { ...bingoBall, state: true };
          return newBall;
        }
        return bingoBall;
      }
      return bingoBall;
    });
    const newBoard = { ...board, card: newCard };
    setBingoBoard(newBoard);
    window.localStorage.setItem("playerBingoBoard", JSON.stringify(newBoard));
  };

  useEffect(() => {
    const boardLS =
      window.localStorage.getItem("playerBingoBoard") ?? JSON.stringify(board);
    setBingoBoard(JSON.parse(boardLS));
  }, [showedBalls]);

  return {
    toggleBall,
    bingoStyledBalls,
  };
};

export default useBingoBoard;
