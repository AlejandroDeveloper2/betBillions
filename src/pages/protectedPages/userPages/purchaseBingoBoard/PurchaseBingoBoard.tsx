import { BsFillCartFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";

import { useShoppingCartContext } from "@hooks/index";

import {
  Image,
  Footer,
  SidebarGifts,
  DefaultButton,
  Carousel,
} from "@components/index";

import {
  PurchaseContainer,
  PageTitle,
  PurchaseDetailsContainer,
  PurchaseCartIndicator,
  PurchaseDetailsIndicator,
  CartNumberIndicator,
  Subtitle,
} from "./PurchaseBingoBoard.style";

import { BingoBallsFigure } from "@assets/index";

const PurchaseBingoBoard = (): JSX.Element => {
  const { totalToPay, bingoBoards } = useShoppingCartContext();
  return (
    <PurchaseContainer>
      <SidebarGifts />
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
      <PurchaseDetailsContainer>
        <PurchaseCartIndicator>
          <h2>Carrito de compras</h2>
          <CartNumberIndicator>
            <span>{bingoBoards.length}</span>
            <BsFillCartFill style={{ color: "var(--white)", fontSize: 50 }} />
          </CartNumberIndicator>
          <DefaultButton
            style={{
              bg: "var(--light-gray)",
              fontColor: "var(--dark-gray)",
              width: "20rem",
            }}
            title={"Ver carrito de compras"}
            label="Ver carrito"
          >
            <AiFillEye
              style={{
                color: "var(--dark-gray)",
                fontSize: 30,
                marginRight: 10,
              }}
            />
          </DefaultButton>
        </PurchaseCartIndicator>
        <PurchaseDetailsIndicator>
          <h2>Detalles de la compra</h2>
          <TbListDetails
            style={{
              color: "var(--white)",
              fontSize: 30,
              marginRight: 10,
            }}
          />
          <p>
            <span>$</span>
            {totalToPay} usd
          </p>
        </PurchaseDetailsIndicator>
      </PurchaseDetailsContainer>
      <Subtitle>Selecciona tus cartones de bingo</Subtitle>
      <Carousel />
      <Footer />
    </PurchaseContainer>
  );
};

export default PurchaseBingoBoard;
