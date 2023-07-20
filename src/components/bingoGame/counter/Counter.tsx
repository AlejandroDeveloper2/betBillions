import { useCounter, useGame } from "@hooks/index";
import { CounterContainer } from "./Counter.style";

const Counter = (): JSX.Element => {
  const { bingoRound } = useGame();
  const counter = useCounter(bingoRound);
  return (
    <CounterContainer>
      <span>0 : {bingoRound ? counter : 10}</span>
    </CounterContainer>
  );
};

export default Counter;
