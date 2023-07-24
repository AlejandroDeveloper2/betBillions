import { BsFillGiftFill } from "react-icons/bs";

import { useBingoContext, useGame, useLoading, useModal } from "@hooks/index";

import {
  DefaultButton,
  DynamicBingoBoard,
  Footer,
  GameHead,
  Image,
  Loading,
  LoadingButton,
  Modal,
} from "@components/index";

import {
  AwardContainer,
  BingoButtonText,
  BingoGameBody,
  BingoGameContainer,
  BoardContainer,
  ModalMessage,
} from "./BingoGame.style";
import { BingoFigure } from "@assets/index";

const BingoGame = (): JSX.Element => {
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);
  const { playerBoard, setBingoWinner } = useBingoContext();
  const { bingoRound, showedBalls, getIsUserWinner } = useGame();
  const {
    inactiveLoading,
    activeLoading,
    setMessage,
    loadingMessage,
    isLoading,
  } = useLoading();
  const {} = useModal();
  const isGameStopped = showedBalls.length === 0 ? true : false;

  return (
    <>
      <Modal isModalVisible={isGameStopped}>
        <Modal.Body>
          <Image
            source={BingoFigure}
            alt={"Bingo boards"}
            size={{
              lg: 60,
              md: 80,
              sm: 60,
            }}
          />
          <ModalMessage>
            La ronda aun no se ha iniciado espera un momento!
          </ModalMessage>
        </Modal.Body>
      </Modal>
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
    </>
  );
};

export default BingoGame;
