import { useLocation, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";

import {
  useLoading,
  useLotteryContext,
  useShoppingCartContext,
} from "@hooks/index";

import {
  Image,
  Footer,
  DefaultButton,
  Carousel,
  LoadingButton,
  SidebarBalance,
} from "@components/index";

import {
  PurchaseContainer,
  PageTitle,
  PurchaseDetailsContainer,
  PurchaseCartIndicator,
  PurchaseDetailsIndicator,
  CartNumberIndicator,
  Subtitle,
  P,
} from "./PurchaseBingoBoard.style";

import { BingoBallsFigure } from "@assets/index";
import { Content } from "@styles/GlobalStyles.style";

const PurchaseBingoBoard = (): JSX.Element => {
  const { totalToPay, bingoBoards } = useShoppingCartContext();
  const { buyBingoBoards } = useLotteryContext();
  const navigate = useNavigate();
  const location = useLocation();
  const lotteryKey = location.pathname.split("/")[4];

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  return (
    <PurchaseContainer>
      <SidebarBalance />
      <Content>
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
              onClick={() =>
                navigate(
                  `/userPanel/lottery/purchaseBingoDetails/${lotteryKey}`
                )
              }
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
        <P>Si compras 5 cartones recibes 2 gratis!</P>
        <Carousel />
        {isLoading ? (
          <LoadingButton
            message={loadingMessage}
            style={{
              bg: "var(--black)",
              fontColor: "var(--white)",
              width: "30rem",
            }}
          />
        ) : (
          <DefaultButton
            style={{
              bg: "var(--black)",
              fontColor: "var(--white)",
              width: "30rem",
            }}
            title={"Realizar Compra"}
            label="Realizar compra"
            onClick={() => {
              buyBingoBoards(bingoBoards, lotteryKey, {
                activeLoading,
                inactiveLoading,
                setMessage,
              });
            }}
          >
            <BiSolidPurchaseTagAlt
              style={{ color: "var(--white)", fontSize: 30, marginRight: 5 }}
            />
          </DefaultButton>
        )}
        <Footer />
      </Content>
    </PurchaseContainer>
  );
};

export default PurchaseBingoBoard;
