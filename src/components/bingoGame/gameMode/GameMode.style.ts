import styled from "styled-components";

const GameModeContainer = styled.div`
  width: 5rem;
  padding: 0.4rem 0.3rem;
  background-color: var(--light-gray);
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.4rem;
  span {
    width: 8px;
    height: 8px;
    background-color: var(--gray);
    border-radius: 50%;
    justify-self: center;
  }
`;

export { GameModeContainer };
