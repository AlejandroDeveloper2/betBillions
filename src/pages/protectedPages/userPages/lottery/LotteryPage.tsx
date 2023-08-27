import { useRealTimeFecher } from "@hooks/index";
import { formatDate } from "@utils/index";
import { LotteryService } from "@services/lottery.service";

import {
  AdCard,
  Empty,
  Footer,
  Loading,
  SidebarBalance,
} from "@components/index";

import { Datetext } from "../userPanel/UserPanel.style";
import { LotteryContainer } from "./LotteryPage.style";
import { CardAdTitle, Content } from "@styles/GlobalStyles.style";

const lotteryService = new LotteryService();

const LotteryPage = (): JSX.Element => {
  const { data: reffels, isLoading } = useRealTimeFecher(
    "/lottery/list",
    lotteryService.getAllBingoReffels
  );

  const filteredReffels = reffels?.filter((reffel) => reffel.state === true);

  return (
    <LotteryContainer>
      <SidebarBalance />
      <Content>
        <h1>Sorteos</h1>
        {isLoading ? (
          <Loading
            message="Cargando sorteos disponibles!"
            textColor="var(--bg-secondary-color)"
          />
        ) : filteredReffels ? (
          filteredReffels.map((reffel) => (
            <AdCard key={reffel.id} play={reffel.state} lotteryKey={reffel.key}>
              <CardAdTitle>Juega y gana </CardAdTitle>
              <Datetext>{formatDate(reffel.startDate)}</Datetext>
            </AdCard>
          ))
        ) : (
          <Empty message="¡No hay sorteos programados!" />
        )}
        <Footer />
      </Content>
    </LotteryContainer>
  );
};

export default LotteryPage;
