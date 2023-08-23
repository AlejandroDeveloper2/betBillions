import { BsFillGiftFill } from "react-icons/bs";
import { VscDebugContinue } from "react-icons/vsc";

import { useBingoContext, useGame, useLoading, useModal } from "@hooks/index";
import { BingoRound } from "types";

import {
  DefaultButton,
  DynamicBingoBoard,
  Footer,
  GameHead,
  Image,
  Loading,
  LoadingButton,
  Modal,
  ModalVariant,
} from "@components/index";

import {
  AwardContainer,
  BingoButtonText,
  BingoGameBody,
  BingoGameContainer,
  BoardContainer,
  ModalMessage,
} from "./BingoGame.style";
import { BingoFigure, PartyGift } from "@assets/index";

const BingoGame = (): JSX.Element => {
  const lotteryKey = location.pathname.split("/")[4];
  const { playerBoard, setBingoWinner } = useBingoContext();
  const { bingoRound, showedBalls, getIsUserWinner } = useGame();
  const {
    inactiveLoading,
    activeLoading,
    setMessage,
    loadingMessage,
    isLoading,
  } = useLoading();
  const { isModalVisible, showModal, hideModal, data } = useModal<BingoRound>();
  const isGameStopped = showedBalls.length === 0 ? true : false;

  return (
    <>
      <ModalVariant isModalVisible={isModalVisible}>
        <Modal.Body>
          <Image
            source={PartyGift}
            alt={"Bet billions ganador"}
            size={{
              lg: 40,
              md: 40,
              sm: 60,
            }}
          />
          <ModalMessage>
            ¡Felicitaciones <span>{data?.userWinner}</span> has sido el primero
            en decir BINGO!
          </ModalMessage>
          <DefaultButton
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
            }}
            title={"Continuar siguiente ronda"}
            label="Continuar"
            onClick={hideModal}
          >
            <VscDebugContinue
              style={{ color: "var(--white)", fontSize: 30, marginRight: 10 }}
            />
          </DefaultButton>
        </Modal.Body>
      </ModalVariant>
      <ModalVariant isModalVisible={isGameStopped}>
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
      </ModalVariant>
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
              onClick={() => {
                setBingoWinner(lotteryKey, bingoRound ? bingoRound.id : 1, {
                  inactiveLoading,
                  activeLoading,
                  setMessage,
                });
                showModal(bingoRound);
              }}
              disabled={getIsUserWinner()}
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
