import {
  AdCard,
  Indicator,
  Image,
  Footer,
  SidebarBalance,
} from "../../../../components";
import { Gift3dIcon, TrophyIcon } from "../../../../assets";

import { Datetext } from "../userPanel/UserPanel.style";
import {
  IndicatorList,
  LotteryContainer,
  PromIndicator,
} from "./LotteryPage.style";
import {
  CardAdTitle,
  IndicatorHead,
  IndicatorTitle,
} from "../../../../styles/GlobalStyles.style";

const LotteryDetails = (): JSX.Element => {
  return (
    <>
      <LotteryContainer>
        <SidebarBalance />
        <h1>Sorteos</h1>
        <AdCard>
          <CardAdTitle>Juega y gana </CardAdTitle>
          <Datetext>Martes 28 de Julio de 2023</Datetext>
        </AdCard>

        <Indicator width="100%">
          <IndicatorHead>
            <IndicatorTitle>Premios</IndicatorTitle>
            <Image
              source={TrophyIcon}
              alt={"Bet billions wallet"}
              size={{ lg: 60, md: 40, sm: 80 }}
            />
          </IndicatorHead>
          <IndicatorList>
            <p>1 juego 250 usd</p>
            <p>2 juego 250 usd</p>
            <p>3 juego 250 usd</p>
          </IndicatorList>
          <PromIndicator>
            <h2>
              Si aplica PROMO
              <span>6 500 usd</span>
              <span>7 500 usd</span>
            </h2>
            <Image
              source={Gift3dIcon}
              alt={"Team bet billions"}
              size={{ lg: 80, md: 100, sm: 80 }}
            />
          </PromIndicator>
        </Indicator>
        <Footer />
      </LotteryContainer>
    </>
  );
};

export default LotteryDetails;
