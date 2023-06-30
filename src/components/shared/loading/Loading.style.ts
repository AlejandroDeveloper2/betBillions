import styled from "styled-components";

import { LoadingStyleProps } from "../../../types";

const LoadingContainer = styled.div<LoadingStyleProps>`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  span {
    color: ${(props) => props.color};
    font-size: 1rem;
    font-weight: medium;
    text-transform: capitalize;
    text-align: center;
  }
`;

const Spinner = styled.div<LoadingStyleProps>`
  display: inline-block;
  transform: scale(0.5);
  position: relative;
  width: 80px;
  height: 80px;
  div {
    transform-origin: 40px 40px;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0 0 -4px;
    }
  }
  div:nth-child(1) {
    animation-delay: -0.036s;
    &::after {
      top: 63px;
      left: 63px;
    }
  }
  div:nth-child(2) {
    animation-delay: -0.072s;
    &::after {
      top: 68px;
      left: 56px;
    }
  }

  div:nth-child(3) {
    animation-delay: -0.108s;
    &::after {
      top: 71px;
      left: 48px;
    }
  }

  div:nth-child(4) {
    animation-delay: -0.144s;
    &::after {
      top: 72px;
      left: 40px;
    }
  }

  div:nth-child(5) {
    animation-delay: -0.18s;
    &::after {
      top: 71px;
      left: 32px;
    }
  }
  div:nth-child(6) {
    animation-delay: -0.216s;
    &::after {
      top: 68px;
      left: 24px;
    }
  }
  div:nth-child(7) {
    animation-delay: -0.252s;
    &::after {
      top: 63px;
      left: 17px;
    }
  }
  div:nth-child(8) {
    animation-delay: -0.288s;
    &::after {
      top: 56px;
      left: 12px;
    }
  }
`;

const SpinnerVariant = styled.div<LoadingStyleProps>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${(props) => props.textcolor};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
  }
  div:nth-child(2) {
    left: 8px;
  }
  div:nth-child(3) {
    left: 32px;
  }
  div:nth-child(4) {
    left: 56px;
  }
`;

export { LoadingContainer, Spinner, SpinnerVariant };
