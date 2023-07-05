import styled from "styled-components";

import { ButtonStyleProps } from "../../../types";

const Button = styled.button<ButtonStyleProps>`
  width: 100%;
  height: 4rem;
  border-radius: 4rem;
  background-color: ${(props: ButtonStyleProps) => props.background};
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: all ease 0.5s;
  position: relative;
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  span {
    color: ${(props: ButtonStyleProps) => props.color};
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    padding: 1.2rem 1.5rem;
    width: ${(props) => (props.width ? props.width : "100%")};
    span {
      font-size: 1.2rem;
    }
  }
`;

export { Button };
