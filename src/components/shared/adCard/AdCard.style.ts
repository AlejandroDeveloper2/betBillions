import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to right,
    var(--bg-primary-color),
    var(--bg-secondary-color)
  );
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 2rem 3rem;
  border-radius: 3rem;
  grid-gap: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 6rem;
    grid-gap: 2rem;
  }
`;

const Column = styled.div`
  align-items: center;
  justify-content: center;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-self: center;
  @media (min-width: 768px) {
    justify-self: end;
  }
`;

const ColumnVariant = styled(Column)`
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const PlayLink = styled(Link)`
  color: var(--white);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Figure = styled.figure`
  position: absolute;
  bottom: 2rem;
  left: 0;
  display: none;
  @media (min-width: 1000px) {
    left: -6rem;
  }
  @media (min-width: 1400px) {
    display: none;
  }
`;

export { CardContainer, Column, ColumnVariant, PlayLink, Figure };
