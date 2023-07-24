import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  padding: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--bg-secondary-color);
  text-align: center;
`;

const responsiveConfig = [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
      dots: true,
    },
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
      dots: true,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 820,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 375,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 414,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 540,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

export { CarouselContainer, responsiveConfig, P, EmptyContainer };
