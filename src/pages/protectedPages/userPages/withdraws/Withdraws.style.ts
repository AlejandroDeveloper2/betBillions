import styled from "styled-components";

const WithdrawsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 5.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--white);
  gap: 2rem;

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 1rem;
  }
`;

const PageTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 1.8rem;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
    }
  }
`;

const IndicatorContainer = styled.div`
  margin: 0 auto;
`;

const InterestMessage = styled.div`
  padding: 1.2rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--bg-primary-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    font-weight: 500;
    color: var(--white);
    text-align: center;
    font-size: 1.5rem;
  }
`;

export { WithdrawsContainer, PageTitle, IndicatorContainer, InterestMessage };
