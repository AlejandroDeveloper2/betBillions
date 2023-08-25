import { MdNotStarted } from "react-icons/md";
import { FiPause } from "react-icons/fi";

import { activeRoundButton } from "@utils/index";
import { useBingoContext, useLoading, useLotteryContext } from "@hooks/index";
import { LotteryDetailsProps } from "types";

import { DefaultButton, GameMode, LoadingButton } from "@components/index";

import { RoundCard, RoundsContainer } from "./LotteryDetails.style";

const LotteryDetailsAdmin = ({
  lotteryDetails,
}: LotteryDetailsProps): JSX.Element => {
  const { activeBingoLottery, stopGame } = useBingoContext();
  const { inactiveLottery } = useLotteryContext();
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  const stoppingRoundLoading = useLoading();
  const loadingConfig = useLoading();

  return (
    <>
      <RoundsContainer>
        {lotteryDetails?.rounds.map((round, i) => (
          <RoundCard key={round.id}>
            <span>Ronda - {round.numberRound}</span>
            <p>{round.userWinner ? round.userWinner : "No hay ganador"}</p>
            <GameMode mode={round.typeGame} />
            {!activeRoundButton(i, lotteryDetails.rounds) && isLoading ? (
              <LoadingButton
                message={loadingMessage}
                style={{
                  bg: "var(--light-gray)",
                  fontColor: "var(--bg-secondary-color)",
                }}
              />
            ) : (
              <>
                <DefaultButton
                  style={{
                    bg: "var(--light-gray)",
                    fontColor: "var(--bg-secondary-color)",
                  }}
                  title="Activar ronda de bingo!"
                  label="Empezar ronda"
                  onClick={() => {
                    activeBingoLottery(
                      round.idLottery ? round.idLottery : "",
                      round.id,
                      {
                        activeLoading,
                        inactiveLoading,
                        setMessage,
                      }
                    );
                  }}
                  disabled={activeRoundButton(i, lotteryDetails.rounds)}
                >
                  <MdNotStarted
                    style={{
                      color: "var(--bg-secondary-color)",
                      fontSize: "40px",
                      marginRight: "10px",
                    }}
                  />
                </DefaultButton>
                {!activeRoundButton(i, lotteryDetails.rounds) &&
                stoppingRoundLoading.isLoading ? (
                  <LoadingButton
                    message={stoppingRoundLoading.loadingMessage}
                    style={{
                      bg: "var(--light-gray)",
                      fontColor: "var(--bg-secondary-color)",
                    }}
                  />
                ) : (
                  <DefaultButton
                    style={{
                      bg: "var(--gray)",
                      fontColor: "var(--bg-secondary-color)",
                    }}
                    title="Parar ronda de bingo!"
                    label="Terminar ronda"
                    onClick={() => stopGame(round.id, stoppingRoundLoading)}
                    disabled={activeRoundButton(i, lotteryDetails.rounds)}
                  >
                    <FiPause
                      style={{
                        color: "var(--bg-secondary-color)",
                        fontSize: "40px",
                        marginRight: "10px",
                      }}
                    />
                  </DefaultButton>
                )}
              </>
            )}
          </RoundCard>
        ))}
      </RoundsContainer>
      {loadingConfig.isLoading ? (
        <LoadingButton
          message={loadingConfig.loadingMessage}
          style={{
            bg: "var(--white)",
            fontColor: "var(--bg-secondary-color)",
            width: "20rem",
          }}
        />
      ) : (
        <DefaultButton
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
            width: "20rem",
          }}
          title="Inactivar sorteo"
          onClick={() =>
            inactiveLottery(
              lotteryDetails ? lotteryDetails.key : "",
              loadingConfig
            )
          }
          label="Inactivar loteria"
        />
      )}
    </>
  );
};

export default LotteryDetailsAdmin;
