import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  padding: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const responsiveConfig = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 820,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
    },
  },
  {
    breakpoint: 375,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

export { CarouselContainer, responsiveConfig };
