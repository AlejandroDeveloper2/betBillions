import styled from "styled-components";

const RoundsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const RoundCard = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--bg-secondary-color);
  padding: 1.5rem;
  span:nth-child(1) {
    font-size: 1.2rem;
    color: var(--white);
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 1rem;
    color: var(--white);
    font-weight: 500;
    text-align: center;
  }
  button {
    span {
      text-transform: capitalize;
    }
  }
`;

export { RoundsContainer, RoundCard };
