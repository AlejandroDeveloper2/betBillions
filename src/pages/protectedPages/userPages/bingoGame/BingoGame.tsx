import { useEffect } from "react";
import { BsFillGiftFill } from "react-icons/bs";

import { useBingoContext, useGame, useLoading } from "@hooks/index";

import {
  DefaultButton,
  DynamicBingoBoard,
  Footer,
  GameHead,
  Loading,
  LoadingButton,
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
  const { playerBoard, getPlayerBoard, setBingoWinner } = useBingoContext();
  const { bingoRound, getIsUserWinner } = useGame();
  const {
    inactiveLoading,
    activeLoading,
    setMessage,
    loadingMessage,
    isLoading,
  } = useLoading();

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
        {isLoading ? (
          <LoadingButton
            message={loadingMessage}
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
              width: "15rem",
            }}
          />
        ) : (
          <DefaultButton
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
              width: "15rem",
            }}
            title={"Bingo!"}
            onClick={() =>
              setBingoWinner(
                lotteryId,
                bingoRound ? bingoRound.numberRound : 1,
                {
                  inactiveLoading,
                  activeLoading,
                  setMessage,
                }
              )
            }
            disabled={getIsUserWinner(playerBoard)}
          >
            <BingoButtonText>¡Bingo!</BingoButtonText>
          </DefaultButton>
        )}
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
