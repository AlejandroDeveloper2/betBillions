import { useEffect } from "react";
import Slider from "react-slick";

import { useLotteryContext } from "@hooks/index";

import { BingoBoard } from "@components/index";

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

  useEffect(() => {
    getRandomBingoBoards();
  }, []);

  return (
    <CarouselContainer>
      <Slider {...settings} className="slider">
        {randomBingoBoards.map((board) => (
          <BingoBoard key={board.id} />
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
