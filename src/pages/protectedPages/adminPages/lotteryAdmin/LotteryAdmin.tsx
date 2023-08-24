import { useModal, useRealTimeFecher } from "@hooks/index";
import { LotteryService } from "@services/lottery.service";
import { formatDate } from "@utils/index";
import { LotteryDetail } from "types";

import {
  AdCard,
  DefaultButton,
  Empty,
  Footer,
  Loading,
  LotteryAdminForm,
  LotteryDetailsAdmin,
  Modal,
} from "@components/index";

import {
  AdContainer,
  LotteryAdminContainer,
  PageTitle,
} from "./LotteryAdmin.style";
import { CardAdTitle } from "@styles/GlobalStyles.style";
import { Datetext } from "@pages/protectedPages/userPages/userPanel/UserPanel.style";

const lotteryService = new LotteryService();

const LotteryAdmin = (): JSX.Element => {
  const { data: availableLotteries, isLoading } = useRealTimeFecher(
    "/lottery/available/admin",
    lotteryService.getAdminLotteries
  );

  const { isModalVisible, showModal, hideModal } = useModal();
  const {
    isModalVisible: isDetailModalVisible,
    showModal: showDetailModal,
    hideModal: hideDetailModal,
    data,
  } = useModal<LotteryDetail>();

  return (
    <>
      <Modal isModalVisible={isModalVisible}>
        <Modal.Head title="Crear nuevo sorteo" hideModal={hideModal} />
        <Modal.Body>
          <LotteryAdminForm />
        </Modal.Body>
      </Modal>
      <Modal isModalVisible={isDetailModalVisible}>
        <Modal.Head title="Detalle del sorteo" hideModal={hideDetailModal} />
        <Modal.Body>
          <LotteryDetailsAdmin lotteryDetails={data} />
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
        ) : availableLotteries ? (
          availableLotteries.map((lottery, i) => (
            <AdContainer
              key={lottery.id}
              onClick={() => showDetailModal(lottery)}
            >
              <AdCard lotteryKey={lottery.key}>
                <Datetext>Sorteo {i + 1}</Datetext>
                <CardAdTitle>Juega y gana </CardAdTitle>
                <Datetext>{formatDate(lottery.startDate)}</Datetext>
              </AdCard>
            </AdContainer>
          ))
        ) : (
          <Empty message="¡No hay sorteos programados!" />
        )}
        <Footer />
      </LotteryAdminContainer>
    </>
  );
};

export default LotteryAdmin;
