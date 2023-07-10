import { AiFillPlayCircle } from "react-icons/ai";

import {
  DefaultButton,
  Footer,
  Image,
  SidebarBalance,
  UserBingoCardsCarousel,
} from "@components/index";

import { GamePreviewContainer, PageTitle, Subtitle } from "./GamePreview.style";
import { BingoFigure } from "@assets/index";

const GamePreview = (): JSX.Element => {
  return (
    <GamePreviewContainer>
      <SidebarBalance />
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
    </GamePreviewContainer>
  );
};

export default GamePreview;
