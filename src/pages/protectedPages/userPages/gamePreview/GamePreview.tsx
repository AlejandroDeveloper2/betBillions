import { useNavigate } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import {
  DefaultButton,
  Footer,
  Image,
  SidebarBalance,
  UserBingoCardsCarousel,
} from "@components/index";

import { GamePreviewContainer, PageTitle, Subtitle } from "./GamePreview.style";
import { BingoFigure } from "@assets/index";
import { Content } from "@styles/GlobalStyles.style";

const GamePreview = (): JSX.Element => {
  const navigate = useNavigate();
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);

  return (
    <GamePreviewContainer>
      <SidebarBalance />
      <Content>
        <PageTitle>
          <h1>Mi juego de bingo</h1>
          <Image
            source={BingoFigure}
            alt={"Bingo boards betbillions"}
            size={{
              lg: 15,
              md: 20,
              sm: 20,
            }}
          />
          <DefaultButton
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
              width: "20rem",
            }}
            title={"Volver al detalle del sorteo"}
            label="Volver"
            onClick={() => navigate(`/userPanel/lottery/details/${lotteryId}`)}
          >
            <BiArrowBack
              style={{
                color: "var(--white)",
                fontSize: 40,
                marginRight: 5,
              }}
            />
          </DefaultButton>
        </PageTitle>
        <Subtitle>Mis cartones de bingo</Subtitle>
        <UserBingoCardsCarousel />
        <DefaultButton
          style={{
            bg: "var(--black)",
            fontColor: "var(--white)",
            width: "30rem",
          }}
          title={"Jugar bingo"}
          label="Empezar a jugar"
          disabled
        >
          <AiFillPlayCircle
            style={{
              color: "var(--white)",
              fontSize: 40,
              marginRight: 5,
            }}
          />
        </DefaultButton>
        <Footer />
      </Content>
    </GamePreviewContainer>
  );
};

export default GamePreview;
