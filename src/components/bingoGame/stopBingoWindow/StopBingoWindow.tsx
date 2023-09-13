import { useNavigate } from "react-router-dom";
import { VscDebugContinue } from "react-icons/vsc";

import { useGame } from "@hooks/index";
// import { UsersService } from "@services/users.service";
// import { LotteryService } from "@services/lottery.service";
import { StopBingoWindowProps } from "types";

import { DefaultButton, Image } from "@components/index";

import { BingoFigure } from "@assets/index";
import { ModalMessage } from "@pages/protectedPages/userPages/bingoGame/BingoGame.style";

// const usersService = new UsersService();
// const lotteryService = new LotteryService();

const StopBingoWindow = ({
  hideGameInfoModal,
}: StopBingoWindowProps): JSX.Element => {
  // const lotteryKey = location.pathname.split("/")[4];
  const navigate = useNavigate();
  const { showedBalls } = useGame();
  // const { data: lotteryDetail } = useRealTimeFecher(
  //   "/lottery/awards",
  //   (token) => lotteryService.getBingoReffel(lotteryKey, token),
  //   null
  // );
  // const { data: userWinner } = useRealTimeFecher("/users/winner", (token) =>
  //   usersService.getWinnerUser(
  //     bingoRound?.userWinner ? bingoRound.userWinner : 1,
  //     token
  //   )
  // );

  const isGameFinished = showedBalls.length === 75;

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
      {isGameFinished ? (
        <>
          <ModalMessage>El juego ha finalizado!</ModalMessage>
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
        </>
      ) : (
        <ModalMessage>Juega y gana!</ModalMessage>
      )}
    </>
  );
};

export default StopBingoWindow;
