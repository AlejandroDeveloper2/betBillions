import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TbCardboards } from "react-icons/tb";
import { IoGiftSharp } from "react-icons/io5";

import { useLoading, useLotteryContext, useToast } from "@hooks/index";
import { formatDate } from "@utils/index";

import {
  AdCard,
  Indicator,
  Image,
  Footer,
  SidebarBalance,
  Toast,
  Loading,
  DefaultButton,
} from "@components/index";
import { TrophyIcon } from "@assets/index";

import { Datetext } from "../userPanel/UserPanel.style";
import {
  IndicatorList,
  LotteryContainer,
  // PromIndicator,
  RoundDatails,
} from "./LotteryPage.style";
import {
  CardAdTitle,
  IndicatorHead,
  IndicatorTitle,
} from "@styles/GlobalStyles.style";

const LotteryDetails = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lotteryDetail, getBingoReffel } = useLotteryContext();
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);

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
    getBingoReffel(lotteryId, {
      toastConfig: {
        showToast,
        hideToast,
        configToast,
      },
      loadingConfig: {
        activeLoading,
        inactiveLoading,
        setMessage,
      },
    });
  }, []);

  return (
    <>
      <LotteryContainer>
        <SidebarBalance />
        <h1>Sorteos</h1>
        {isLoading ? (
          <Loading
            message={loadingMessage}
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          <>
            <AdCard lotteryId={lotteryDetail ? lotteryDetail.id : 0}>
              <CardAdTitle>Juega y gana </CardAdTitle>
              <Datetext>
                {formatDate(lotteryDetail ? lotteryDetail.startDate : "")}
              </Datetext>
            </AdCard>

            <Indicator width="100%">
              <IndicatorHead>
                <IndicatorTitle>Premios</IndicatorTitle>
                <Image
                  source={TrophyIcon}
                  alt={"Bet billions wallet"}
                  size={{ lg: 10, md: 10, sm: 20 }}
                />
              </IndicatorHead>
              <IndicatorList>
                {lotteryDetail?.rounds.map((round, index) => (
                  <RoundDatails key={index} roundkey={index}>
                    <p>Ronda {index + 1}:</p>
                    <IoGiftSharp
                      style={{
                        fontSize: 30,
                      }}
                    />
                    <span>
                      Se sorteará un premio de <small>{round.award} USD</small>
                    </span>
                    <p>Tipo de juego:</p>
                    <span>{round.typeGame}</span>
                  </RoundDatails>
                ))}
              </IndicatorList>
              {/* <Image
                  source={Gift3dIcon}
                  alt={"Team bet billions"}
                  size={{ lg: 10, md: 20, sm: 40 }}
                /> */}
            </Indicator>
            <DefaultButton
              style={{
                bg: "var(--black)",
                fontColor: "var(--white)",
                width: "30rem",
              }}
              title={"Seleccionar cartones de bingo"}
              label="Seleccionar tablas"
              onClick={() => navigate("/userPanel/lottery/purchaseBingoBoard")}
            >
              <TbCardboards
                style={{ color: "var(--white)", fontSize: 40, marginRight: 5 }}
              />
            </DefaultButton>
          </>
        )}
        <Footer />
      </LotteryContainer>
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

export default LotteryDetails;
