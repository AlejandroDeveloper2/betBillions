import { Link } from "react-router-dom";
import styled from "styled-components";

import { MenuItemStyleProps } from "../../../types";

import { MenuBg } from "../../../assets";

const UL = styled.ul`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background-image: url(${MenuBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1rem 0.5rem;
  justify-content: center;
  gap: 1rem;

  li:nth-child(7) {
    display: none;
  }
  li:nth-child(8) {
    display: none;
  }
  li:nth-child(9) {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 0.2rem;
    li:nth-child(7) {
      display: inline-block;
    }
    li:nth-child(8) {
      display: inline-block;
    }
    li:nth-child(9) {
      display: inline-block;
    }
  }

  img {
    margin-bottom: 2rem;
    display: none;
  }

  @media (min-width: 1000px) {
    width: 15%;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    position: relative;
    border-radius: 0;
    padding: 3rem 2rem;

    li:nth-child(6) {
      margin-top: 5rem;
    }
    li:nth-child(9) {
      margin-top: 5rem;
    }
    li:nth-child(7) {
      display: inline-block;
    }
    li:nth-child(8) {
      display: inline-block;
    }
    li:nth-child(9) {
      display: inline-block;
    }
    img {
      display: block;
    }
  }
`;

const LI = styled.li`
  width: 3rem;
  list-style: none;
  display: inline-block;

  @media (min-width: 768px) {
    width: 5rem;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`;

const LinkItem = styled(Link)<MenuItemStyleProps>`
  width: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.background};
  transition: all 0.6s ease;

  span {
    color: ${(props) => props.color};
    font-size: 1.2rem;
    font-weight: 600;
    display: none;
    transition: all 0.6s ease;
  }
  img {
    transform: scale(1);
  }
  svg {
    transition: all 0.6s ease;
  }

  &:hover {
    background-color: var(--white);
    span {
      color: var(--bg-secondary-color);
    }
    svg {
      fill: var(--bg-secondary-color);
      transform: rotate(20deg);
    }
  }

  @media (min-width: 768px) {
    width: 5rem;
  }

  @media (min-width: 1000px) {
    width: 100%;
    border-radius: 4rem;
    justify-content: start;
    padding: 0.5rem 1.5rem;
    span {
      display: block;
    }
  }
`;

export { UL, LI, LinkItem };
