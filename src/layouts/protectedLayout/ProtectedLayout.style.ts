import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: var(--gray);
  position: relative;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 10% 90%;
  }
  @media (min-width: 1700px) {
    display: grid;
    grid-template-columns: 15% 85%;
  }
`;

const Panel = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--white);
  display: flex;
  padding: 0;
  justify-content: start;
  align-items: center;
  flex-direction: column-reverse;
  gap: 3rem;
  position: relative;
  @media (min-width: 1000px) {
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
  }
`;

export { Container, Panel };
