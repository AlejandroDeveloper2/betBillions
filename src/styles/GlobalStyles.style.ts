import { Link } from "react-router-dom";
import styled from "styled-components";

import { ContainerFormStyleProps } from "../types";

const FormContainer = styled.div<ContainerFormStyleProps>`
  width: 100%;
  background-color: var(--white);
  padding: 3rem 1.5rem;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
  position: relative;

  @media (min-width: 768px) {
    width: ${(props) => props.width}rem;
    border-radius: 1rem;
    padding: 6rem 2.5rem;
    animation-name: moveLeft;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    @keyframes moveLeft {
      0% {
        transform: translateX(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const LinkVariant = styled(Link)`
  color: var(--pink);
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: capitalize;
  text-decoration: none;
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export { FormContainer, Links, LinkVariant };
