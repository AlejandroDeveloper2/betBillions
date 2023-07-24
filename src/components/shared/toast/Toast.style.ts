import styled from "styled-components";

import { ToastStyleProps } from "types";

type ToastStyledBody = {
  color: string;
};

const ToastContainer = styled.div<ToastStyleProps>`
  width: auto;
  padding: 1.5rem 2rem;
  background-color: ${(props: ToastStyleProps) => props.background};
  border-radius: 1rem;
  transition: all 0.7s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  animation: toast-in-right 0.7s;
  animation-fill-mode: forwards;

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const ToastBody = styled.div<ToastStyledBody>`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props: ToastStyledBody) => props.color};
    font-size: 1rem;
    font-weight: medium;
    text-align: center;
    text-transform: capitalize;
  }
`;

export { ToastContainer, ToastBody };
