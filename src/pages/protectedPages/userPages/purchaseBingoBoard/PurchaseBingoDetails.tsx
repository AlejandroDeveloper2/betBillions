import { MdCleaningServices, MdPayment } from "react-icons/md";
import { IoCaretBackOutline } from "react-icons/io5";

import { useShoppingCartContext } from "@hooks/index";

import {
  SidebarBalance,
  Image,
  ShoppingCartCarousel,
  Footer,
  DefaultButton,
} from "@components/index";

import {
  Options,
  PageTitle,
  PurchaseContainer,
  PurchaseDetailsContainer,
  PurchaseDetailsIndicator,
  Subtitle,
} from "./PurchaseBingoBoard.style";
import { BingoBallsFigure } from "@assets/index";
import { useNavigate } from "react-router-dom";

const PurchaseBingoDetails = (): JSX.Element => {
  const { totalToPay, bingoBoards, clearShoppingCart } =
    useShoppingCartContext();
  const navigate = useNavigate();
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);

  return (
    <PurchaseContainer>
      <SidebarBalance />
      <PageTitle>
        <h1>Detalles de la compra</h1>
        <Image
          source={BingoBallsFigure}
          alt={"Bingo boards betbillions"}
          size={{
            lg: 15,
            md: 30,
            sm: 30,
          }}
        />
      </PageTitle>
      <PurchaseDetailsContainer>
        <PurchaseDetailsIndicator>
          <h2>Total a pagar</h2>
          <MdPayment
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
        <Options>
          <DefaultButton
            style={{
              bg: "var(--gray)",
              fontColor: "var(--dark-gray)",
              width: "30rem",
            }}
            title={"Limpiar carrito"}
            label="Limpiar carrito"
            onClick={clearShoppingCart}
          >
            <MdCleaningServices
              style={{
                color: "var(--dark-gray)",
                fontSize: 30,
                marginRight: 10,
              }}
            />
          </DefaultButton>
          <DefaultButton
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
              width: "30rem",
            }}
            title={"Volver a la compra"}
            label="Volver"
            onClick={() =>
              navigate(`/userPanel/lottery/purchaseBingoBoard/${lotteryId}`)
            }
          >
            <IoCaretBackOutline
              style={{
                color: "var(--white)",
                fontSize: 30,
                marginRight: 10,
              }}
            />
          </DefaultButton>
        </Options>
      </PurchaseDetailsContainer>
      <Subtitle>Mis cartones de bingo {`(${bingoBoards.length})`}</Subtitle>
      <ShoppingCartCarousel />
      <Footer />
    </PurchaseContainer>
  );
};

export default PurchaseBingoDetails;
