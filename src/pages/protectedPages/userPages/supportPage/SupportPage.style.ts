import styled from "styled-components";

const SupportContainer = styled.div`
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
    width: 100%;
    flex-direction: row-reverse;
    padding-bottom: 1rem;
    align-items: flex-start;
  }
`;

const PageTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 1.8rem;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    div {
      flex-direction: row;
    }
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
    }
  }
`;

const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export { SupportContainer, PageTitle, OptionsContainer };
