import styled from "styled-components";

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--white);
  gap: 2rem;
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      font-size: 1rem;
      color: var(--dark-gray);
      font-weight: normal;
      text-transform: uppercase;
      vertical-align: middle;
    }
  }

  @media (min-width: 768px) {
    h1 {
      span {
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1000px) {
    width: 70%;
    align-items: flex-start;
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
      span {
        font-size: 1.5rem;
      }
    }
    padding-bottom: 1rem;
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

const Datetext = styled.p`
  font-size: 1.7rem;
  color: var(--white);
  text-align: center;
  font-weight: normal;
  @media (min-width: 768px) {
    font-size: 2.2rem;
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
  }
`;

export {
  PanelContainer,
  CardAdTitle,
  Datetext,
  IndicatorTitle,
  Indicators,
  IndicatorHead,
  IndicatorValue,
};
