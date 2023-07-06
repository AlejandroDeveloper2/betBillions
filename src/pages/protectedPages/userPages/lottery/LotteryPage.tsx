import { AdCard, Footer, SidebarBalance } from "../../../../components";

import { Datetext } from "../userPanel/UserPanel.style";
import { LotteryContainer } from "./LotteryPage.style";
import { CardAdTitle } from "../../../../styles/GlobalStyles.style";

const LotteryPage = (): JSX.Element => {
  return (
    <>
      <SidebarBalance />
      <LotteryContainer>
        <h1>Sorteos</h1>
        <AdCard play>
          <CardAdTitle>Juega y gana </CardAdTitle>
          <Datetext>Martes 28 de Julio de 2023</Datetext>
        </AdCard>
        <AdCard play>
          <CardAdTitle>Domingo millonario </CardAdTitle>
          <Datetext>Domingo 06 de Agosto de 2023</Datetext>
        </AdCard>
        <Footer />
      </LotteryContainer>
    </>
  );
};

export default LotteryPage;
