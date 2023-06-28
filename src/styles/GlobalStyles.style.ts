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
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    background-color: var(--white);
    opacity: 0.6;
    z-index: 1;
    @media (min-width: 768px) {
      border-radius: 1rem;
    }
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(1.05);
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--white);
    opacity: 0.4;
    z-index: 0;
    @media (min-width: 768px) {
      border-radius: 1rem;
    }
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(1.1);
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
    font-size: 0.8rem;
  }
`;

export { FormContainer, Links, LinkVariant };
