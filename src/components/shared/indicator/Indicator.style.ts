import styled from "styled-components";
import { IndicatorProps } from "../../../types";

const IndicatorContainer = styled.div<IndicatorProps>`
  width: 100%;
  border-radius: 1rem;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: ${(props) => props.width};
    padding: 2rem 2.5rem;
  }
`;

export { IndicatorContainer };
