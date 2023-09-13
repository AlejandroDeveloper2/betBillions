import { useCounter, useGame } from "@hooks/index";
import { CounterContainer } from "./Counter.style";

const Counter = (): JSX.Element => {
  const { bingoRound, showedBalls } = useGame();
  const counter = useCounter(bingoRound);
  const isCounterStopped = showedBalls.length === 0 || showedBalls.length >= 75;
  return (
    <CounterContainer>
      <span>0 : {bingoRound ? (isCounterStopped ? 10 : counter) : 10}</span>
    </CounterContainer>
  );
};

export default Counter;
