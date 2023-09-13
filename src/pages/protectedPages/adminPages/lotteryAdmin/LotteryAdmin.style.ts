import styled from "styled-components";

const LotteryAdminContainer = styled.div`
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
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 2rem;
  }

  @media (min-width: 1000px) {
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    h1 {
      text-align: left;
      font-size: 2.5rem;
    }
    padding-bottom: 1rem;
    overflow-y: scroll;
  }
`;

const AdContainer = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: 1000px) {
    width: 80%;
  }
`;

const PageTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export { LotteryAdminContainer, AdContainer, PageTitle };
