import { useEffect } from "react";
import { BsFillGiftFill } from "react-icons/bs";

import { useBingoContext, useGame } from "@hooks/index";

import {
  DefaultButton,
  DynamicBingoBoard,
  Footer,
  GameHead,
  Loading,
} from "@components/index";

import {
  AwardContainer,
  BingoButtonText,
  BingoGameBody,
  BingoGameContainer,
  BoardContainer,
} from "./BingoGame.style";

const BingoGame = (): JSX.Element => {
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);
  const { playerBoard, getPlayerBoard } = useBingoContext();
  const { bingoRound } = useGame();

  useEffect(() => {
    if (bingoRound) {
      getPlayerBoard(lotteryId, bingoRound.numberRound);
    }
  }, [bingoRound]);

  return (
    <BingoGameContainer>
      <GameHead />
      <AwardContainer>
        <BsFillGiftFill style={{ color: "var(--white)", fontSize: "40px" }} />
        <p>Premio</p>
        <span>$ {bingoRound?.award} USD</span>
      </AwardContainer>
      <BingoGameBody>
        <DefaultButton
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
            width: "15rem",
          }}
          title={"Bingo!"}
        >
          <BingoButtonText>¡Bingo!</BingoButtonText>
        </DefaultButton>
        <BoardContainer>
          {playerBoard ? (
            <DynamicBingoBoard board={playerBoard} index={1} />
          ) : (
            <Loading
              message="Cargando tabla..."
              textColor="var(--bg-secondary-color)"
            />
          )}
        </BoardContainer>
      </BingoGameBody>
      <Footer />
    </BingoGameContainer>
  );
};

export default BingoGame;
