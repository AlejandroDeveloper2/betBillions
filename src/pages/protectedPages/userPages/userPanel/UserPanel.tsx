import { useEffect } from "react";

import {
  useAuthContext,
  useLoading,
  useToast,
  useUserProfileContext,
} from "../../../../hooks";

import {
  AdCard,
  Footer,
  Indicator,
  InvitationLink,
  Image,
  Toast,
  Loading,
  SidebarDefault,
} from "../../../../components";

import { Datetext, PanelContainer } from "./UserPanel.style";
import {
  CardAdTitle,
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
  Indicators,
} from "../../../../styles/GlobalStyles.style";

import { Gift3dIcon, Wallet3dIcon } from "../../../../assets";

const UserPanel = (): JSX.Element => {
  const { userAuth } = useAuthContext();
  const { userPanelData, getUserPanelData } = useUserProfileContext();

  const {
    isToastVisible,
    toast,
    showToast,
    hideToast,
    getToastColor,
    configToast,
  } = useToast();

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    getUserPanelData({
      toastConfig: { showToast, hideToast, configToast },
      loadingConfig: { activeLoading, inactiveLoading, setMessage },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PanelContainer>
        <SidebarDefault />
        <h1>
          Bienvenido <span>{userAuth ? userAuth.fullName : "Usuario"}</span>
        </h1>
        <AdCard play>
          <CardAdTitle>Proximo sorteo</CardAdTitle>
          <Datetext>Martes 28 de Julio de 2023</Datetext>
        </AdCard>
        <Indicators>
          <Indicator width="100%">
            <IndicatorHead>
              <IndicatorTitle>Mis Premios</IndicatorTitle>
              <Image
                source={Gift3dIcon}
                alt={"Bet billions gifts"}
                size={{ lg: 60, md: 40, sm: 80 }}
              />
            </IndicatorHead>
            {isLoading ? (
              <Loading
                message={loadingMessage}
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
                size={{ lg: 60, md: 40, sm: 80 }}
              />
            </IndicatorHead>
            {isLoading ? (
              <Loading
                message={loadingMessage}
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
        {isLoading ? (
          <Loading
            message={loadingMessage}
            textColor="var(--bg-primary-color)"
          />
        ) : (
          <InvitationLink toastConfig={{ showToast, hideToast, configToast }} />
        )}
        <Footer />
      </PanelContainer>
      <Toast
        message={toast.toastMessage}
        type={toast.toastType}
        toastConfig={{
          isToastVisible,
          getToastColor,
          hideToast,
        }}
      />
    </>
  );
};

export default UserPanel;
