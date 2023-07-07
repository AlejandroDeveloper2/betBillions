import styled from "styled-components";
import { LinkBackgound } from "../../../assets";

const LinkContainer = styled.div`
  width: 100%;
  gap: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  h2 {
    font-size: 1.4rem;
    color: var(--bg-primary-color);
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-items: start;
    width: auto;
    h2 {
      font-size: 1.7rem;
      text-align: left;
    }
  }
`;

const LinkContent = styled.div`
  background-image: url(${LinkBackgound});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 8rem;
  padding-right: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  button {
    margin-bottom: 1rem;
    width: auto;
  }
  /* border: 1px solid #000; */
  span {
    font-size: 0.6rem;
    color: var(--bg-primary-color);
    font-weight: medium;
    text-align: center;
    margin-bottom: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 35rem;
    span {
      font-size: 1.2rem;
      margin-bottom: 1.3rem;
      width: 70%;
    }
    button {
      margin-bottom: 1.3rem;
    }
  }
`;

export { LinkContainer, LinkContent };
