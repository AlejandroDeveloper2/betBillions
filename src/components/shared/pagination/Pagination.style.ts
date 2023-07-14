import styled from "styled-components";

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  button {
    width: 3rem;
    padding: 0.3rem;
    svg {
      transform: scale(0.7);
    }
  }
  @media (min-width: 768px) {
    padding: 1rem;
    button {
      width: 5rem;
      padding: 0.5rem;
      svg {
        transform: scale(1);
      }
    }
  }
`;

const IndicatorLabel = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--bg-secondary-color);
  text-align: center;
`;

export { PaginationContainer, IndicatorLabel };
