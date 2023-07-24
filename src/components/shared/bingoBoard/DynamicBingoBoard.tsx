import { BingoBoardProps } from "types";
import { useGame, useBingoContext } from "@hooks/index";
import { setColorBingoBalls } from "@utils/index";

import {
  BoardBody,
  BoardColumn,
  BoardContainer,
  BoardHead,
  DynamicBall,
} from "./BingoBard.style";

const DynamicBingoBoard = (props: BingoBoardProps): JSX.Element => {
  const { board } = props;
  const { showedBalls } = useGame();
  const { validateBingoBalls } = useBingoContext();
  const bingoStyledBalls = setColorBingoBalls(board);

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
              onClick={() => {
                validateBingoBalls(
                  board.lotteryId,
                  board.round,
                  ball.numbers,
                  showedBalls
                );
              }}
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
              onClick={() => {
                validateBingoBalls(
                  board.lotteryId,
                  board.round,
                  ball.numbers,
                  showedBalls
                );
              }}
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
              onClick={() => {
                validateBingoBalls(
                  board.lotteryId,
                  board.round,
                  ball.numbers,
                  showedBalls
                );
              }}
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
              onClick={() => {
                validateBingoBalls(
                  board.lotteryId,
                  board.round,
                  ball.numbers,
                  showedBalls
                );
              }}
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
              onClick={() => {
                validateBingoBalls(
                  board.lotteryId,
                  board.round,
                  ball.numbers,
                  showedBalls
                );
              }}
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
