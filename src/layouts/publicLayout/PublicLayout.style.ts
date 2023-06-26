import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    var(--bg-primary-color) 45%,
    var(--bg-violet) 100%
  );
  background-color: var(--bg-primary-color);
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 5rem;
    justify-content: center;
    gap: 6rem;
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

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export { Container, WelcomeText, Presentation };
