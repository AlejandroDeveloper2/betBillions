import { useEffect } from "react";
import Slider from "react-slick";
import { BiPlus } from "react-icons/bi";
import { IoMdRemoveCircle } from "react-icons/io";

import {
  useLoading,
  useLotteryContext,
  useShoppingCartContext,
} from "@hooks/index";

import { BingoBoard, Image, DefaultButton, Loading } from "@components/index";

import {
  CarouselContainer,
  EmptyContainer,
  P,
  responsiveConfig,
} from "./Carousel.style";
import { EmptyCart } from "@assets/index";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: responsiveConfig,
};

const Carousel = (): JSX.Element => {
  const { randomBingoBoards, getRandomBingoBoards } = useLotteryContext();
  const { addBingoBoardToCart } = useShoppingCartContext();

  useEffect(() => {
    getRandomBingoBoards();
  }, []);

  return (
    <CarouselContainer>
      <Slider {...settings} className="slider">
        {randomBingoBoards.map((board, index) => (
          <BingoBoard key={board.key} board={board} index={index + 1}>
            <DefaultButton
              style={{
                bg: "var(--green)",
                fontColor: "var(--dark-gray)",
              }}
              title={"Seleccionar cartón"}
              onClick={() => addBingoBoardToCart(board)}
            >
              <BiPlus style={{ color: "var(--dark-gray)", fontSize: 20 }} />
            </DefaultButton>
          </BingoBoard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const ShoppingCartCarousel = (): JSX.Element => {
  const { bingoBoards, removeBingoBoardFromCart } = useShoppingCartContext();

  return (
    <CarouselContainer>
      {bingoBoards.length === 0 ? (
        <EmptyContainer>
          <Image
            source={EmptyCart}
            alt={"Carrito vacio"}
            size={{
              lg: 40,
              md: 40,
              sm: 40,
            }}
          />
          <P>¡ Upps Carrito de compras vacio!</P>
        </EmptyContainer>
      ) : (
        <Slider {...settings} className="slider">
          {bingoBoards.map((board, index) => (
            <BingoBoard key={board.key} board={board} index={index + 1}>
              <DefaultButton
                style={{
                  bg: "var(--white)",
                  fontColor: "var(--dark-gray)",
                }}
                title={"Quitar cartón del carrito"}
                onClick={() => removeBingoBoardFromCart(board.key)}
              >
                <IoMdRemoveCircle
                  style={{ color: "var(--dark-gray)", fontSize: 20 }}
                />
              </DefaultButton>
            </BingoBoard>
          ))}
        </Slider>
      )}
    </CarouselContainer>
  );
};

const UserBingoCardsCarousel = (): JSX.Element => {
  const lotteryId = window.parseInt(location.pathname.split("/")[4]);
  const { userBingoBoards, getPurchasedUserBingoBoards } = useLotteryContext();
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    getPurchasedUserBingoBoards(lotteryId, {
      activeLoading,
      inactiveLoading,
      setMessage,
    });
  }, []);

  return (
    <CarouselContainer>
      {isLoading ? (
        <Loading message={loadingMessage} textColor="var(bg-secondary-color)" />
      ) : (
        <Slider {...settings} className="slider">
          {userBingoBoards.map((board, index) => (
            <BingoBoard key={board.key} board={board} index={index + 1} />
          ))}
        </Slider>
      )}
    </CarouselContainer>
  );
};

export { Carousel, ShoppingCartCarousel, UserBingoCardsCarousel };
