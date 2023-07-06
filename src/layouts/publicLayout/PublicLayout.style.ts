import styled from "styled-components";

import { DesktopBg } from "../../assets";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${DesktopBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 5rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 0 5rem;
    justify-content: center;
    gap: 3rem;
    background-image: url(${DesktopBg});
  }
`;

const Presentation = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 4rem;
  }
  @media (min-width: 1000px) {
    width: 30%;
  }
`;

const WelcomeText = styled.h1`
  color: var(--white);
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 10px;
`;

const Animate = styled.figure``;

export { Container, WelcomeText, Presentation, Animate };
