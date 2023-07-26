import { DesktopBg } from "@assets/index";
import { BallStyledProps, DynamicBallStyleProps } from "types";

import styled from "styled-components";

const BoardContainer = styled.div`
  width: 95%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-image: url(${DesktopBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1.2rem 0.5rem;
  position: relative;

  button {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  @media (min-width: 768px) {
    button {
      width: 5rem;
      padding: 1rem;
    }
  }
`;

const BoardBody = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 0.5rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 2px solid var(--bg-secondary-color);
`;

const BoardBodyVariant = styled(BoardBody)`
  background-color: rgba(255, 255, 255, 0.6);
  grid-gap: 0.2rem;
`;

const BoardColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

const Ball = styled.div<BallStyledProps>`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  border: 2px solid var(--dark-gray);
  border-radius: 0.5rem;
  span {
    text-align: center;
    font-weight: 900;
    font-size: 1.2rem;
    font-style: oblique 0.5;
    color: ${(props: BallStyledProps) => props.color};
    filter: drop-shadow(2px 0 0 rgba(0, 0, 0, 1));
  }
`;

const DynamicBall = styled(Ball)<DynamicBallStyleProps>`
  cursor: pointer;
  transition: opacity 0.5s ease;
  background-color: ${(props: DynamicBallStyleProps) => props.background};
  &:hover {
    opacity: 0.5;
  }
`;

const BoardHead = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: var(--white);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  span {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--bg-secondary-color);
    justify-self: center;
    filter: drop-shadow(2px 0 0 var(--blue));
  }
`;

const NumberIndicator = styled.span`
  width: 2rem;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary-color);
  position: absolute;
  color: var(--light-gray);
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 1.2rem;
  top: 0.5rem;
  left: 0;
  right: 0;
  margin: auto;
`;

export {
  BoardContainer,
  BoardBody,
  BoardHead,
  BoardColumn,
  Ball,
  NumberIndicator,
  DynamicBall,
  BoardBodyVariant,
};
