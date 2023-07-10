import styled from "styled-components";

const GamePreviewContainer = styled.div`
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

  button {
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    align-items: flex-start;
    width: 70%;
    padding-bottom: 1rem;
  }
`;

const PageTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  color: var(--bg-secondary-color);
  font-weight: 500;
  text-align: left;
`;

export { GamePreviewContainer, PageTitle, Subtitle };
