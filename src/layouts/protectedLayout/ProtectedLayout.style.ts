import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  display: flex;
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
  background-color: var(--white);
  display: flex;
  padding: 0;
  justify-content: start;
  align-items: center;
  flex-direction: column-reverse;
  gap: 3rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    width: 85%;
    margin-left: 15%;
  }
`;

export { Container, Panel };
