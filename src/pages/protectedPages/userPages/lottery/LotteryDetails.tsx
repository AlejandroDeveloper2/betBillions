import { useNavigate } from "react-router-dom";
import { TbCardboards } from "react-icons/tb";
import { IoGiftSharp } from "react-icons/io5";
import { AiFillPlayCircle } from "react-icons/ai";

import { useRealTimeFecher } from "@hooks/index";
import { formatDate } from "@utils/index";

import {
  AdCard,
  Indicator,
  Image,
  Footer,
  SidebarBalance,
  Loading,
  DefaultButton,
  GameMode,
} from "@components/index";
import { TrophyIcon } from "@assets/index";
import { LotteryService } from "@services/lottery.service";

import { Datetext } from "../userPanel/UserPanel.style";
import {
  IndicatorList,
  LotteryContainer,
  RoundDatails,
} from "./LotteryPage.style";
import {
  CardAdTitle,
  Content,
  IndicatorHead,
  IndicatorTitle,
} from "@styles/GlobalStyles.style";

const lotteryService = new LotteryService();

const LotteryDetails = (): JSX.Element => {
  const lotteryKey = window.location.pathname.split("/")[4];
  const navigate = useNavigate();
  const { data: lotteryDetail, isLoading } = useRealTimeFecher(
    "/lottery/awards",
    (token) => lotteryService.getBingoReffel(lotteryKey, token),
    null
  );
  const { data: userBingoBoards } = useRealTimeFecher(
    "/cardBingo/lottery/users",
    (token) => lotteryService.getPurchasedUserBingoBoards(token, lotteryKey),
    null
  );

  return (
    <LotteryContainer>
      <SidebarBalance />
      <Content>
        <h1>Sorteos</h1>
        {isLoading ? (
          <Loading
            message="Cargando detalles del sorteo..."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          <>
            <AdCard lotteryKey={lotteryDetail ? lotteryDetail.key : ""}>
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
                  size={{ lg: 5, md: 8, sm: 20 }}
                />
                {userBingoBoards?.length === 0 ? (
                  <DefaultButton
                    style={{
                      bg: "var(--black)",
                      fontColor: "var(--white)",
                      width: "40rem",
                    }}
                    title={"Seleccionar cartones de bingo"}
                    label="Seleccionar tablas"
                    onClick={() =>
                      navigate(
                        `/userPanel/lottery/purchaseBingoBoard/${lotteryKey}`
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
                      navigate(`/userPanel/lottery/gamePreview/${lotteryKey}`)
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
                    <GameMode mode={round.typeGame} />
                  </RoundDatails>
                ))}
              </IndicatorList>
            </Indicator>
          </>
        )}
        <Footer />
      </Content>
    </LotteryContainer>
  );
};

export default LotteryDetails;
