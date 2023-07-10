import styled from "styled-components";

import { TableStyledProps } from "types";

const TableContainer = styled.div`
  width: 100%;
  background-color: transparent;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    color: var(--dark-gray);
    margin-bottom: 1rem;

    @media (min-width: 1000px) {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1000px) {
    display: block;
  }
`;

const TableBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0;
  background-color: transparent;
  @media (min-width: 1000px) {
    background-color: var(--light-gray);
    padding: 1.5rem;
  }
`;

const TableHeader = styled.div<TableStyledProps>`
  width: 100%;
  display: none;
  padding: 1rem 0.5rem;
  background-color: var(--bg-secondary-color);
  border-radius: 1rem;
  grid-gap: 1.5rem;
  grid-template-rows: repeat(
    ${(props: TableStyledProps) => props.columnsnumber},
    1fr
  );
  grid-template-columns: none;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(
      ${(props: TableStyledProps) => props.columnsnumber},
      1fr
    );
    grid-template-rows: none;
  }
`;

const TableHeadItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  span {
    display: none;
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--white);
  }
  svg {
    fill: var(--white);
    font-size: 1.5rem;
  }
  @media (min-width: 1000px) {
    span {
      display: block;
    }
  }
`;

const TableItem = styled(TableHeadItem)`
  width: 100%;
  justify-self: self-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  span:first-of-type {
    font-weight: bold;
  }
  overflow: hidden;
  span {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    text-transform: none;
    color: var(--dark-gray);
    text-align: left;
    white-space: pre-wrap;
  }
  svg {
    color: var(--dark-gray);
    fill: var(--dark-gray);
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    justify-self: center;
    justify-content: center;
    span:first-of-type {
      display: none;
    }
    span {
      text-align: center;
    }
    svg {
      display: none;
    }
  }
`;

const TableRowContainer = styled.div<TableStyledProps>`
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: repeat(
    ${(props: TableStyledProps) => props.columnsnumber},
    1fr
  );
  grid-template-columns: none;
  background-color: var(--light-gray);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  @media (min-width: 1000px) {
    padding: 0;
    grid-template-columns: repeat(
      ${(props: TableStyledProps) => props.columnsnumber},
      1fr
    );
    grid-template-rows: none;
    background-color: transparent;
    box-shadow: none;
  }
`;

const RowBar = styled.div`
  width: 0.5rem;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-image: linear-gradient(
    to bottom,
    var(--bg-secondary-color),
    var(--bg-primary-color)
  );

  @media (min-width: 1000px) {
    display: none;
  }
`;

const OptionsField = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export {
  TableContainer,
  TableHeader,
  TableBody,
  TableHeadItem,
  TableItem,
  TableRowContainer,
  RowBar,
  OptionsField,
};
