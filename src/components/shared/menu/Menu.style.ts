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
  z-index: 10;

  li:nth-child(7) {
    display: none;
  }
  li:nth-child(8) {
    display: none;
  }
  li:nth-child(9) {
    display: none;
  }

  li:nth-child(10) {
    display: none;
  }

  li:nth-child(11) {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 0.2rem;
    li:nth-child(7) {
      display: inline-block;
    }
  }

  img {
    margin-bottom: 2rem;
    display: none;
  }

  @media (min-width: 1000px) {
    left: 0;
    width: 15%;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    border-radius: 0;
    padding: 3rem 2rem;
    li:nth-child(8) {
      margin-top: 4rem;
    }
    li:nth-child(11) {
      margin-top: 4rem;
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
    li:nth-child(10) {
      display: inline-block;
    }
    li:nth-child(11) {
      display: inline-block;
    }
    img {
      display: block;
    }
  }
`;

const ULVariant = styled.ul`
  width: 100%;
  display: inline-flex;
  background-color: transparent;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  li:nth-child(5) {
    a {
      background-color: transparent;
      width: auto;
      margin-left: 1rem;
      @media (min-width: 768px) {
        float: right;
      }
    }
  }

  @media (min-width: 1000px) {
    justify-content: flex-end;

    li:nth-child(1) {
      display: none;
    }
    li:nth-child(2) {
      display: none;
    }

    li:nth-child(3) {
      display: none;
    }

    li:nth-child(4) {
      display: none;
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
  background-color: ${(props: MenuItemStyleProps) => props.background};
  transition: all 0.6s ease;

  span {
    color: ${(props: MenuItemStyleProps) => props.color};
    font-size: 1.2rem;
    font-weight: 600;
    display: none;
    transition: all 0.6s ease;
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

const LinkItemVariant = styled(LinkItem)`
  padding: 0.35rem;
  gap: 0;
  border-radius: 0.5rem;

  @media (min-width: 1000px) {
    border-radius: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
  }
`;

export { UL, ULVariant, LI, LinkItem, LinkItemVariant };
