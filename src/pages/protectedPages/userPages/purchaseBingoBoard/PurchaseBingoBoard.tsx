import { Image, Footer } from "@components/index";

import { PurchaseContainer, PageTitle } from "./PurchaseBingoBoard.style";

import { BingoBallsFigure } from "@assets/index";

const PurchaseBingoBoard = (): JSX.Element => {
  return (
    <PurchaseContainer>
      <PageTitle>
        <h1>Compra</h1>
        <Image
          source={BingoBallsFigure}
          alt={"Bingo boards betbillions"}
          size={{
            lg: 20,
            md: 30,
            sm: 30,
          }}
        />
      </PageTitle>
      <Footer />
    </PurchaseContainer>
  );
};

export default PurchaseBingoBoard;
