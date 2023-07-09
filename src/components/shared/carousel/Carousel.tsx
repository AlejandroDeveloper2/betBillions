import { useEffect } from "react";
import Slider from "react-slick";

import { useLotteryContext, useToast } from "@hooks/index";

import { BingoBoard, Toast } from "@components/index";

import { CarouselContainer, responsiveConfig } from "./Carousel.style";

const Carousel = (): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: responsiveConfig,
  };
  const { randomBingoBoards, getRandomBingoBoards } = useLotteryContext();
  const {
    isToastVisible,
    getToastColor,
    toast,
    configToast,
    hideToast,
    showToast,
  } = useToast();

  useEffect(() => {
    getRandomBingoBoards();
  }, []);

  return (
    <>
      <CarouselContainer>
        <Slider {...settings} className="slider">
          {randomBingoBoards.map((board, index) => (
            <BingoBoard
              key={board.key}
              board={board}
              toastConfig={{
                configToast,
                hideToast,
                showToast,
              }}
              index={index + 1}
            />
          ))}
        </Slider>
      </CarouselContainer>
      <Toast
        message={toast.toastMessage}
        type={toast.toastType}
        toastConfig={{
          isToastVisible,
          getToastColor,
          hideToast,
        }}
      />
    </>
  );
};

export default Carousel;
