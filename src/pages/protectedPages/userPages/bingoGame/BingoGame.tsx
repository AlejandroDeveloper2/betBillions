import { BsFillGiftFill } from "react-icons/bs";

import {
  useBingoContext,
  useGame,
  useLoading,
  useModal,
  useRealTimeFecher,
} from "@hooks/index";
import { BingoRound } from "types";
import { UsersService } from "@services/users.service";

import {
  DefaultButton,
  DynamicBingoBoard,
  Footer,
  GameHead,
  Loading,
  LoadingButton,
  Modal,
  ModalVariant,
  StopBingoWindow,
  WinnerWindow,
} from "@components/index";

import {
  AwardContainer,
  BingoButtonText,
  BingoGameBody,
  BingoGameContainer,
  BoardContainer,
} from "./BingoGame.style";

const usersService = new UsersService();

const BingoGame = (): JSX.Element => {
  const lotteryKey = location.pathname.split("/")[4];
  const { playerBoard, setBingoWinner } = useBingoContext();
  const { bingoRound, showedBalls, getIsUserWinner } = useGame();
  const { data: userWinner } = useRealTimeFecher("/users/winner", (token) =>
    usersService.getWinnerUser(
      bingoRound?.userWinner ? bingoRound.userWinner : 1,
      token
    )
  );

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

  const isGameStopped = showedBalls.length === 0 || userWinner ? true : false;

  return (
    <>
      <ModalVariant isModalVisible={isModalVisible}>
        <Modal.Body>
          <WinnerWindow userWinner={userWinner} hideModal={hideModal} />
        </Modal.Body>
      </ModalVariant>

      <ModalVariant isModalVisible={isGameStopped || isGameModalVisible}>
        <Modal.Body>
          <StopBingoWindow hideGameInfoModal={hideGameInfoModal} />
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
