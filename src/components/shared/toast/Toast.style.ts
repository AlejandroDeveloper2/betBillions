import styled from "styled-components";

import { ToastStyleProps } from "../../../types";

const ToastContainer = styled.div<ToastStyleProps>`
  width: auto;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.background};
  border-radius: 1rem;
  opacity: ${(props: ToastStyleProps) =>
    props.istoastvisible !== "true" ? "0" : "1"};
  span {
    color: ${(props) => props.color};
    font-size: 1rem;
    font-weight: medium;
    text-align: center;
    text-transform: capitalize;
  }
  transition: all 0.7s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 60;
`;

export { ToastContainer };
