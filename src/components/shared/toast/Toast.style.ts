import styled from "styled-components";

import { ToastStyleProps } from "../../../types";

const ToastContainer = styled.div<ToastStyleProps>`
  width: auto;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.background};
  border-radius: 1rem;
  transform: ${(props) =>
    props.istoastvisible === "true" ? "translateX(0)" : " translateX(200%)"};
  span {
    color: ${(props) => props.color};
    font-size: 1rem;
    font-weight: medium;
    text-align: center;
    text-transform: capitalize;
  }
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
`;

export { ToastContainer };
