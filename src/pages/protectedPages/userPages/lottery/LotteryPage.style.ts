import styled from "styled-components";

const LotteryContainer = styled.div`
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
  }

  @media (min-width: 768px) {
    h1 {
      span {
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1000px) {
    align-items: flex-start;
    width: 70%;
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

const PromIndicator = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--bg-secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
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

export { LotteryContainer, IndicatorList, PromIndicator };
