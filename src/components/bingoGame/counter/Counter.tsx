import { useCounter } from "@hooks/index";
import { CounterContainer } from "./Counter.style";
import useBingoContext from "@hooks/useBingoContext";

const Counter = (): JSX.Element => {
  const { bingoRound } = useBingoContext();
  const counter = useCounter(bingoRound);
  return (
    <CounterContainer>
      <span>0 : {bingoRound ? counter : 10}</span>
    </CounterContainer>
  );
};

export default Counter;
