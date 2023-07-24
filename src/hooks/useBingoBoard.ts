import { useState } from "react";

import { BingoBall, BingoBoard } from "types";
import { setColorBingoBalls } from "@utils/index";
import { useBingoContext } from ".";

const useBingoBoard = (board: BingoBoard, showedBalls: string[]) => {
  const [bingoBoard, setBingoBoard] = useState<BingoBoard>(board);
  const { validateBingoBalls } = useBingoContext();

  const bingoStyledBalls = setColorBingoBalls(bingoBoard);
  const toggleBall = (ball: string): void => {
    let newBall: BingoBall = { numbers: ball, state: false, color: "" };
    const newCard: BingoBall[] = bingoStyledBalls.map((bingoBall) => {
      if (
        ball === bingoBall.numbers &&
        showedBalls.includes(bingoBall.numbers)
      ) {
        if (!bingoBall.state) {
          const updatedBall = validateBingoBalls(
            bingoBoard.lotteryId,
            bingoBoard.round,
            bingoBall.numbers
          );
          updatedBall.then((resBall) => {
            newBall = resBall;
          });
          return newBall;
        }
        return bingoBall;
      }
      return bingoBall;
    });

    const newBoard = { ...board, card: newCard };
    setBingoBoard(newBoard);
  };

  return {
    toggleBall,
    bingoStyledBalls,
  };
};

export default useBingoBoard;
