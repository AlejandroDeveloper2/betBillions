import { useNavigate } from "react-router-dom";
import { VscDebugContinue } from "react-icons/vsc";

import { useAuthContext, useGame, useRealTimeFecher } from "@hooks/index";
import { UsersService } from "@services/users.service";
// import { LotteryService } from "@services/lottery.service";
import { StopBingoWindowProps } from "types";

import { DefaultButton, Image } from "@components/index";

import { BingoFigure } from "@assets/index";
import { ModalMessage } from "@pages/protectedPages/userPages/bingoGame/BingoGame.style";

const usersService = new UsersService();
// const lotteryService = new LotteryService();

const StopBingoWindow = ({
  hideGameInfoModal,
}: StopBingoWindowProps): JSX.Element => {
  // const lotteryKey = location.pathname.split("/")[4];
  const navigate = useNavigate();
  const { bingoRound, showedBalls } = useGame();

  // const { data: lotteryDetail } = useRealTimeFecher(
  //   "/lottery/awards",
  //   (token) => lotteryService.getBingoReffel(lotteryKey, token),
  //   null
  // );
  const { data: userWinner } = useRealTimeFecher("/users/winner", (token) =>
    usersService.getWinnerUser(bingoRound ? bingoRound.userWinner : 0, token)
  );
  const { userAuth } = useAuthContext();

  const isGameFinished = userWinner && showedBalls.length >= 75;

  return (
    <>
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
        {userWinner && userWinner !== userAuth?.sub
          ? "El ganador de la ronda anterior es: " + userWinner
          : null}
      </ModalMessage>
      {isGameFinished && (
        <>
          <ModalMessage>El ganador de la última ronda ha sido:</ModalMessage>
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
    </>
  );
};

export default StopBingoWindow;
