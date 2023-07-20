import { MdNotStarted } from "react-icons/md";

import { useBingoContext, useLoading, useRealTimeFecher } from "@hooks/index";
import { LotteryService } from "@services/lottery.service";
import { formatDate } from "@utils/index";

import {
  AdCard,
  DefaultButton,
  Footer,
  GameMode,
  Loading,
  LoadingButton,
} from "@components/index";

import {
  LotteryAdminContainer,
  RoundCard,
  RoundsContainer,
} from "./LotteryAdmin.style";
import { CardAdTitle } from "@styles/GlobalStyles.style";
import { Datetext } from "@pages/protectedPages/userPages/userPanel/UserPanel.style";

const lotteryService = new LotteryService();

const LotteryAdmin = (): JSX.Element => {
  const { data: availableLottery, isLoading } = useRealTimeFecher(
    "/lottery/available/admin",
    lotteryService.getAvailableLotteries
  );
  const { activeBingoLottery } = useBingoContext();
  const {
    isLoading: isLoadingActive,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  return (
    <LotteryAdminContainer>
      <h1>Administrar sorteos</h1>
      {isLoading ? (
        <Loading
          message="Cargando sorteos disponibles..."
          textColor="var(--bg-secondary-color)"
        />
      ) : availableLottery ? (
        <>
          <AdCard key={availableLottery.id} lotteryId={availableLottery.id}>
            <CardAdTitle>Juega y gana </CardAdTitle>
            <Datetext>{formatDate(availableLottery.startDate)}</Datetext>
          </AdCard>
          <RoundsContainer>
            {availableLottery.rounds.map((round) => (
              <RoundCard key={round.id}>
                <span>Ronda - {round.numberRound}</span>
                <GameMode mode={round.typeGame} />
                {isLoadingActive ? (
                  <LoadingButton
                    message={loadingMessage}
                    style={{
                      bg: "var(--light-gray)",
                      fontColor: "var(--bg-secondary-color)",
                    }}
                  />
                ) : (
                  <DefaultButton
                    style={{
                      bg: "var(--light-gray)",
                      fontColor: "var(--bg-secondary-color)",
                    }}
                    title="Activar ronda de bingo!"
                    label="Empezar ronda"
                    onClick={() => {
                      activeBingoLottery(
                        round.idLottery ? round.idLottery : 0,
                        round.id,
                        {
                          activeLoading,
                          inactiveLoading,
                          setMessage,
                        }
                      );
                    }}
                  >
                    <MdNotStarted
                      style={{
                        color: "var(--bg-secondary-color)",
                        fontSize: "40px",
                        marginRight: "10px",
                      }}
                    />
                  </DefaultButton>
                )}
              </RoundCard>
            ))}
          </RoundsContainer>
        </>
      ) : (
        <span>No hay sorteos programados!</span>
      )}
      <Footer />
    </LotteryAdminContainer>
  );
};

export default LotteryAdmin;
