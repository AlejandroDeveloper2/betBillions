import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TbCardboards } from "react-icons/tb";
import { IoGiftSharp } from "react-icons/io5";
import { AiFillPlayCircle } from "react-icons/ai";

import { useLoading, useLotteryContext } from "@hooks/index";
import { formatDate } from "@utils/index";

import {
  AdCard,
  Indicator,
  Image,
  Footer,
  SidebarBalance,
  Loading,
  DefaultButton,
} from "@components/index";
import { TrophyIcon } from "@assets/index";

import { Datetext } from "../userPanel/UserPanel.style";
import {
  IndicatorList,
  LotteryContainer,
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
  const {
    lotteryDetail,
    userBingoBoards,
    getBingoReffel,
    getPurchasedUserBingoBoards,
  } = useLotteryContext();
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    getBingoReffel(lotteryId, {
      activeLoading,
      inactiveLoading,
      setMessage,
    });
  }, []);

  useEffect(() => {
    getPurchasedUserBingoBoards(lotteryId, {
      activeLoading,
      inactiveLoading,
      setMessage,
    });
  }, []);

  return (
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
              {userBingoBoards.length === 0 ? (
                <DefaultButton
                  style={{
                    bg: "var(--black)",
                    fontColor: "var(--white)",
                    width: "30rem",
                  }}
                  title={"Seleccionar cartones de bingo"}
                  label="Seleccionar tablas"
                  onClick={() =>
                    navigate(
                      `/userPanel/lottery/purchaseBingoBoard/${lotteryId}`
                    )
                  }
                >
                  <TbCardboards
                    style={{
                      color: "var(--white)",
                      fontSize: 40,
                      marginRight: 5,
                    }}
                  />
                </DefaultButton>
              ) : (
                <DefaultButton
                  style={{
                    bg: "var(--black)",
                    fontColor: "var(--white)",
                    width: "30rem",
                  }}
                  title={"Ver mis cartones de bingo"}
                  label="Ir al juego"
                  onClick={() =>
                    navigate(`/userPanel/lottery/gamePreview/${lotteryId}`)
                  }
                >
                  <AiFillPlayCircle
                    style={{
                      color: "var(--white)",
                      fontSize: 40,
                      marginRight: 5,
                    }}
                  />
                </DefaultButton>
              )}
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
          </Indicator>
        </>
      )}
      <Footer />
    </LotteryContainer>
  );
};

export default LotteryDetails;
