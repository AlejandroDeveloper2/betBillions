import Slider from "react-slick";
import { BiPlus } from "react-icons/bi";
import { IoMdRemoveCircle } from "react-icons/io";

import { useRealTimeFecher, useShoppingCartContext } from "@hooks/index";
import { LotteryService } from "@services/lottery.service";

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

const lotteryService = new LotteryService();
const lotteryKey = window.location.pathname.split("/")[4];

const Carousel = (): JSX.Element => {
  const { addBingoBoardToCart } = useShoppingCartContext();
  const { data: lotteryDetail } = useRealTimeFecher(
    "/lottery/awards",
    (token) => lotteryService.getBingoReffel(lotteryKey, token),
    null
  );
  const { data: randomBingoBoards, isLoading } = useRealTimeFecher(
    "/cardBingo/list",
    lotteryService.getRandomBingoBoards,
    null
  );

  return (
    <CarouselContainer>
      <Slider {...settings} className="slider">
        {isLoading ? (
          <Loading
            message="Cargando cartones aleatorios..."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          randomBingoBoards?.map((board, index) => (
            <BingoBoard key={board.key} board={board} index={index + 1}>
              <DefaultButton
                style={{
                  bg: "var(--green)",
                  fontColor: "var(--dark-gray)",
                }}
                title={"Seleccionar cartón"}
                onClick={() =>
                  addBingoBoardToCart(
                    board,
                    lotteryDetail ? lotteryDetail.numberOfRounds : 1,
                    lotteryDetail ? lotteryDetail.price : 1
                  )
                }
              >
                <BiPlus style={{ color: "var(--dark-gray)", fontSize: 20 }} />
              </DefaultButton>
            </BingoBoard>
          ))
        )}
      </Slider>
    </CarouselContainer>
  );
};

const ShoppingCartCarousel = (): JSX.Element => {
  const { bingoBoards, removeBingoBoardFromCart } = useShoppingCartContext();
  const { data: lotteryDetail } = useRealTimeFecher(
    "/lottery/awards",
    (token) => lotteryService.getBingoReffel(lotteryKey, token),
    null
  );
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
                onClick={() =>
                  removeBingoBoardFromCart(
                    board.key,
                    lotteryDetail ? lotteryDetail.price : 1
                  )
                }
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
  const { data: userBingoBoards, isLoading } = useRealTimeFecher(
    "/cardBingo/lottery/users",
    (token) => lotteryService.getPurchasedUserBingoBoards(token, lotteryKey),
    null
  );

  return (
    <CarouselContainer>
      {isLoading ? (
        <Loading
          message="Cargando tus cartones..."
          textColor="var(bg-secondary-color)"
        />
      ) : (
        <Slider {...settings} className="slider">
          {userBingoBoards?.map((board, index) => (
            <BingoBoard key={board.key} board={board} index={index + 1} />
          ))}
        </Slider>
      )}
    </CarouselContainer>
  );
};

export { Carousel, ShoppingCartCarousel, UserBingoCardsCarousel };
