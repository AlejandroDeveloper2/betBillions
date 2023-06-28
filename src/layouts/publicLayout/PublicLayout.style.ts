import styled from "styled-components";

import { DesktopBg, MobileBg } from "../../assets";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${MobileBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 5rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 0 5rem;
    justify-content: center;
    gap: 6rem;
    background-image: url(${DesktopBg});
  }
`;

const Presentation = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.h1`
  color: var(--white);
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
`;

const Animate = styled.figure`
  animation-name: bounce;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

export { Container, WelcomeText, Presentation, Animate };
