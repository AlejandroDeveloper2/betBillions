import { useNavigate } from "react-router-dom";

import { BsFillGiftFill } from "react-icons/bs";
import { VscDebugContinue } from "react-icons/vsc";

import {
  useAuthContext,
  useBingoContext,
  useGame,
  useLoading,
  useModal,
  useRealTimeFecher,
} from "@hooks/index";
import { BingoRound } from "types";
import { UsersService } from "@services/users.service";
import { LotteryService } from "@services/lottery.service";

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

const usersService = new UsersService();
const lotteryService = new LotteryService();

const BingoGame = (): JSX.Element => {
  const lotteryKey = location.pathname.split("/")[4];
  const navigate = useNavigate();
  const { data: lotteryDetail } = useRealTimeFecher(
    "/lottery/awards",
    (token) => lotteryService.getBingoReffel(lotteryKey, token),
    null
  );
  const { data: userWinner } = useRealTimeFecher("/users/winner", (token) =>
    usersService.getWinnerUser(bingoRound ? bingoRound.userWinner : 1, token)
  );

  const { playerBoard, setBingoWinner } = useBingoContext();
  const { bingoRound, showedBalls, getIsUserWinner } = useGame();
  const { userAuth } = useAuthContext();
  const {
    inactiveLoading,
    activeLoading,
    setMessage,
    loadingMessage,
    isLoading,
  } = useLoading();
  const { isModalVisible, showModal, hideModal } = useModal<BingoRound>();
  const { isModalVisible: isGameModalVisible, hideModal: hideGameInfoModal } =
    useModal();

  const isGameStopped = showedBalls.length === 0 ? true : false;
  const isGameFinished =
    lotteryDetail?.rounds.length === bingoRound?.numberRound ||
    playerBoard === null;

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
            ¡Felicitaciones <span>{userWinner}</span> has sido el primero en
            decir BINGO!
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

      <ModalVariant isModalVisible={isGameStopped || isGameModalVisible}>
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
            {isGameFinished
              ? "El juego ha finalizado!"
              : "La ronda aun no se ha iniciado espera un momento!"}
          </ModalMessage>
          <ModalMessage>
            {userWinner &&
              userWinner !== userAuth?.sub &&
              "El ganador es de la ronda anterior: " + userWinner}
          </ModalMessage>
          {isGameFinished && (
            <>
              <ModalMessage>
                El ganador de la última ronda ha sido:
              </ModalMessage>
              <h2 style={{ fontSize: 30, fontWeight: 900 }}>
                {bingoRound?.userWinner}
              </h2>
            </>
          )}
          {isGameFinished ? (
            <DefaultButton
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
              }}
              title="Regresar al inicio"
              label="Volver al inicio"
              onClick={() => {
                hideGameInfoModal();
                navigate("/userPanel");
              }}
            >
              <VscDebugContinue
                style={{ color: "var(--white)", fontSize: 30, marginRight: 10 }}
              />
            </DefaultButton>
          ) : null}
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
