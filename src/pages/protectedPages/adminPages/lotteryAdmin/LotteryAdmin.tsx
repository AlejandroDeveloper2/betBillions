import { MdNotStarted } from "react-icons/md";

import {
  useBingoContext,
  useLoading,
  useModal,
  useRealTimeFecher,
} from "@hooks/index";
import { LotteryService } from "@services/lottery.service";
import { activeRoundButton, formatDate } from "@utils/index";

import {
  AdCard,
  DefaultButton,
  Empty,
  Footer,
  GameMode,
  Loading,
  LoadingButton,
  LotteryAdminForm,
  Modal,
} from "@components/index";

import {
  AdContainer,
  LotteryAdminContainer,
  RoundCard,
  RoundsContainer,
  PageTitle,
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
  const { isModalVisible, showModal, hideModal } = useModal();

  return (
    <>
      <Modal isModalVisible={isModalVisible}>
        <Modal.Head title="Crear nuevo sorteo" hideModal={hideModal} />
        <Modal.Body>
          <LotteryAdminForm />
        </Modal.Body>
      </Modal>
      <LotteryAdminContainer>
        <PageTitle>
          <h1>Administrar sorteos</h1>
          <DefaultButton
            style={{
              bg: "var(--black)",
              fontColor: "var(--white)",
              width: "10rem",
            }}
            title={"Crear nuevo sorteo"}
            label="Nuevo"
            onClick={showModal}
          ></DefaultButton>
        </PageTitle>

        {isLoading ? (
          <Loading
            message="Cargando sorteos disponibles..."
            textColor="var(--bg-secondary-color)"
          />
        ) : availableLottery ? (
          <>
            <AdContainer>
              <AdCard
                key={availableLottery.id}
                lotteryKey={availableLottery.key}
              >
                <CardAdTitle>Juega y gana </CardAdTitle>
                <Datetext>{formatDate(availableLottery.startDate)}</Datetext>
              </AdCard>
            </AdContainer>
            <RoundsContainer>
              {availableLottery.rounds.map((round, i) => (
                <RoundCard key={round.id}>
                  <span>Ronda - {round.numberRound}</span>
                  <p>
                    {round.userWinner ? round.userWinner : "No hay ganador"}
                  </p>
                  <GameMode mode={round.typeGame} />
                  {!activeRoundButton(i, availableLottery.rounds) &&
                  isLoadingActive ? (
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
                          round.idLottery ? round.idLottery : "",
                          round.id,
                          {
                            activeLoading,
                            inactiveLoading,
                            setMessage,
                          }
                        );
                      }}
                      disabled={activeRoundButton(i, availableLottery.rounds)}
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
          <Empty message="¡No hay sorteos programados!" />
        )}
        <Footer />
      </LotteryAdminContainer>
    </>
  );
};

export default LotteryAdmin;
