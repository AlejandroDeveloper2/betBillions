import { useNavigate } from "react-router-dom";

import { useAuthContext, useRealTimeFecher } from "@hooks/index";
import { formatDate } from "@utils/index";
import { UserProfileService } from "@services/userProfile.service";
import { LotteryService } from "@services/lottery.service";

import {
  AdCard,
  Footer,
  Indicator,
  InvitationLink,
  Image,
  Loading,
  SidebarDefault,
  DefaultButton,
} from "@components/index";

import { Datetext, PanelContainer, Section } from "./UserPanel.style";
import {
  CardAdTitle,
  Content,
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
  Indicators,
} from "@styles/GlobalStyles.style";

import { Gift3dIcon, Wallet3dIcon } from "@assets/index";
import { LotteryListItem } from "types";

const UserPanel = (): JSX.Element => {
  const { userAuth } = useAuthContext();
  const userProfileService = new UserProfileService();
  const lotteryService = new LotteryService();
  const { data: userPanelData, isLoading: isLoadingUserData } =
    useRealTimeFecher("/users/panel", userProfileService.getUserPanelData);

  const { data: reffels, isLoading: isLoadingReffels } = useRealTimeFecher<
    LotteryListItem[]
  >("/lottery/list", lotteryService.getAllBingoReffels);

  const navigate = useNavigate();

  return (
    <PanelContainer>
      <SidebarDefault />
      <Content>
        <h1>
          Bienvenido <span>{userAuth ? userAuth.fullName : "Usuario"}</span>
        </h1>
        {isLoadingReffels ? (
          <Loading
            message={"Cargando sorteo disponible..."}
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          reffels
            ?.filter((reffel) => reffel.state === true)
            .map((reffel) => (
              <AdCard
                key={reffel.id}
                play={reffel.state}
                lotteryKey={reffel.key}
              >
                <CardAdTitle>Proximo sorteo</CardAdTitle>
                <Datetext>{formatDate(reffel.startDate)}</Datetext>
              </AdCard>
            ))
        )}
        <Indicators>
          <Indicator width="100%">
            <IndicatorHead>
              <IndicatorTitle>Mis Premios</IndicatorTitle>
              <Image
                source={Gift3dIcon}
                alt={"Bet billions gifts"}
                size={{ lg: 20, md: 40, sm: 40 }}
              />
            </IndicatorHead>
            {isLoadingUserData ? (
              <Loading
                message="Cargando total de premios..."
                textColor="var(--bg-primary-color)"
              />
            ) : (
              <IndicatorValue>
                ${userPanelData?.awards}
                <span>USD</span>
              </IndicatorValue>
            )}
          </Indicator>
          <Indicator width="100%">
            <IndicatorHead>
              <IndicatorTitle>Saldo Total</IndicatorTitle>
              <Image
                source={Wallet3dIcon}
                alt={"Bet billions wallet"}
                size={{ lg: 20, md: 40, sm: 40 }}
              />
            </IndicatorHead>
            {isLoadingUserData ? (
              <Loading
                message="Cargando balance..."
                textColor="var(--bg-primary-color)"
              />
            ) : (
              <IndicatorValue>
                ${userPanelData?.balance}
                <span>USD</span>
              </IndicatorValue>
            )}
          </Indicator>
        </Indicators>
        <Section>
          {isLoadingUserData ? (
            <Loading
              message="Cargando link de referido..."
              textColor="var(--bg-primary-color)"
            />
          ) : (
            <InvitationLink />
          )}
          <DefaultButton
            style={{
              bg: "var(--black)",
              fontColor: "var(--white)",
              width: "30rem",
            }}
            title={"Quiero obtener mi ID de 10 dolares"}
            label="Plan de fidelización"
            onClick={() => navigate("/userPanel/myWallet/loyaltyPlan")}
          />
        </Section>
        <Footer />
      </Content>
    </PanelContainer>
  );
};

export default UserPanel;
