import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Panel = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  padding: 0;
  justify-content: start;
  align-items: center;
  flex-direction: column-reverse;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1000px) {
    width: 85%;
  }
`;

export { Container, Panel };
