import { Link } from "react-router-dom";
import styled from "styled-components";

import { ContainerFormStyleProps } from "types";

const FormContainer = styled.div<ContainerFormStyleProps>`
  width: 100%;
  background-color: var(--white);
  padding: 3rem 1.5rem;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
  position: relative;

  @media (min-width: 768px) {
    width: ${(props) => props.width}rem;
    border-radius: 1rem;
    padding: 6rem 2.5rem;
    animation-name: moveLeft;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    @keyframes moveLeft {
      0% {
        transform: translateX(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const LinkVariant = styled(Link)`
  color: var(--pink);
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: capitalize;
  text-decoration: none;
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const CardAdTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--white);
  text-align: center;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const IndicatorTitle = styled(CardAdTitle)`
  font-size: 1rem;
  color: var(--dark-gray);
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IndicatorValue = styled(CardAdTitle)`
  font-size: 2rem;
  font-weight: bold;
  color: var(--bg-secondary-color);
  span {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Indicators = styled.section`
  width: 100%;
  display: inline-flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const IndicatorList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  p {
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    color: var(--bg-secondary-color);
  }
`;

const IndicatorHead = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: flex-start;
    flex-direction: row;
    button {
      margin-left: calc(100% - 40rem);
    }
  }
`;

const PromIndicator = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--bg-secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: left;
    color: var(--white);
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-size: 1rem;
      font-weight: normal;
      text-align: center;
    }
  }
`;

const DialogMessage = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: medium;
  text-align: center;
  color: var(--dark-gray);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media (min-width: 1400px) {
    width: 75%;
  }
`;

const ToastsContainer = styled.div`
  width: auto;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  z-index: 60;
`;

export {
  FormContainer,
  Links,
  LinkVariant,
  CardAdTitle,
  IndicatorTitle,
  IndicatorValue,
  Indicators,
  IndicatorHead,
  IndicatorList,
  PromIndicator,
  DialogMessage,
  Content,
  ToastsContainer,
};
