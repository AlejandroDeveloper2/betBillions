import { useState, useEffect } from "react";

import { setColorBingoBalls } from "@utils/index";
import { BingoBoard, BingoBoardProps } from "types";

import {
  BoardBody,
  BoardColumn,
  BoardContainer,
  BoardHead,
  DynamicBall,
} from "./BingoBard.style";
import useGame from "@hooks/useGame";

const DynamicBingoBoard = (props: BingoBoardProps): JSX.Element => {
  const { board } = props;
  const { showedBalls } = useGame();
  const boardLS =
    window.localStorage.getItem("playerBingoBoard") ?? JSON.stringify(board);
  const [bingoBoard, setBingoBoard] = useState<BingoBoard>(JSON.parse(boardLS));

  const bingoStyledBalls = setColorBingoBalls(bingoBoard);

  const toggleBall = (ball: string): void => {
    const newCard = bingoStyledBalls.map((bingoBall) => {
      if (ball === bingoBall.numbers) {
        if (showedBalls.includes(bingoBall.numbers)) {
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

  return (
    <BoardContainer>
      <BoardHead>
        <span>B</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>O</span>
      </BoardHead>
      <BoardBody>
        {/*B */}
        <BoardColumn>
          {bingoStyledBalls.slice(0, 5).map((ball, index) => (
            <DynamicBall
              key={index}
              color={ball.color}
              onClick={() => toggleBall(ball.numbers)}
              background={ball.state ? "var(--green)" : "transparent"}
            >
              <span>{ball.numbers.substring(1, 3)}</span>
            </DynamicBall>
          ))}
        </BoardColumn>
        {/*I */}
        <BoardColumn>
          {bingoStyledBalls.slice(5, 10).map((ball, index) => (
            <DynamicBall
              key={index}
              color={ball.color}
              onClick={() => toggleBall(ball.numbers)}
              background={ball.state ? "var(--green)" : "transparent"}
            >
              <span>{ball.numbers.substring(1, 3)}</span>
            </DynamicBall>
          ))}
        </BoardColumn>
        {/*N */}
        <BoardColumn>
          {bingoStyledBalls.slice(10, 15).map((ball, index) => (
            <DynamicBall
              key={index}
              color={ball.color}
              onClick={() => toggleBall(ball.numbers)}
              background={ball.state ? "var(--green)" : "transparent"}
            >
              <span>{ball.numbers.substring(1, 3)}</span>
            </DynamicBall>
          ))}
        </BoardColumn>
        {/*G */}
        <BoardColumn>
          {bingoStyledBalls.slice(15, 20).map((ball, index) => (
            <DynamicBall
              key={index}
              color={ball.color}
              onClick={() => toggleBall(ball.numbers)}
              background={ball.state ? "var(--green)" : "transparent"}
            >
              <span>{ball.numbers.substring(1, 3)}</span>
            </DynamicBall>
          ))}
        </BoardColumn>
        {/*O */}
        <BoardColumn>
          {bingoStyledBalls.slice(20, 25).map((ball, index) => (
            <DynamicBall
              key={index}
              color={ball.color}
              onClick={() => toggleBall(ball.numbers)}
              background={ball.state ? "var(--green)" : "transparent"}
            >
              <span>{ball.numbers.substring(1, 3)}</span>
            </DynamicBall>
          ))}
        </BoardColumn>
      </BoardBody>
    </BoardContainer>
  );
};

export default DynamicBingoBoard;
