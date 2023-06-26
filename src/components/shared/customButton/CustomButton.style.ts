import styled from "styled-components";

import { ButtonStyleProps } from "../../../types";

const Button = styled.button<ButtonStyleProps>`
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 4rem;
  background-color: ${(props: ButtonStyleProps) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  span {
    color: ${(props: ButtonStyleProps) => props.color};
    font-size: 1.2rem;
    font-weight: 800;
  }
  &:hover {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    padding: 1.2rem 1.5rem;
    span {
      font-size: 1.2rem;
    }
  }
`;

export { Button };
