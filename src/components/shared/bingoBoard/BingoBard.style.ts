import { DesktopBg } from "@assets/index";
import { BallStyledProps } from "types";

import styled from "styled-components";

const BoardContainer = styled.div`
  width: 95%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-image: url(${DesktopBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1.2rem 0.5rem;
  position: relative;
  button {
    position: absolute;
    top: 0.5rem;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const BoardBody = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 0.5rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 2px solid var(--bg-secondary-color);
`;

const BoardColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

const Ball = styled.div<BallStyledProps>`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  border: 2px solid var(--dark-gray);
  border-radius: 0.5rem;
  span {
    text-align: center;
    font-weight: 900;
    font-size: 1.2rem;
    font-style: oblique 0.5;
    color: ${(props: BallStyledProps) => props.color};
    filter: drop-shadow(2px 0 0 rgba(0, 0, 0, 1));
  }
`;

const BoardHead = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: var(--white);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  span {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--bg-secondary-color);
    justify-self: center;
    filter: drop-shadow(2px 0 0 var(--blue));
  }
`;

export { BoardContainer, BoardBody, BoardHead, BoardColumn, Ball };