import styled from "styled-components";

import { CurrentBall, NumberBall } from "../gameHead/GameHead.style";

const LastBallsContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: var(--green);
  border-radius: 0.5rem;
  gap: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  button {
    width: 5rem;
    height: 3rem;
    border-radius: 0.5rem;
    span {
      display: none;
    }
  }
  @media (min-width: 768px) {
    width: 40rem;
    justify-content: flex-end;
    padding: 0 1rem;
    gap: 1rem;
    button {
      width: 15rem;
      span {
        display: block;
      }
    }
  }
`;

const Ball = styled(CurrentBall)`
  width: 3rem;
  height: 3rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  div:first-of-type {
    width: 85%;
    height: 85%;
  }
  @media (min-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const NumberBallVariant = styled(NumberBall)`
  width: 70%;
  height: 70%;
  span {
    font-size: 0.8rem;
    color: var(--dark-gray);
  }
  @media (min-width: 768px) {
    span {
      font-size: 1rem;
    }
  }
`;

export { LastBallsContainer, Ball, NumberBallVariant };
