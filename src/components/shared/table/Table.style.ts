import styled from "styled-components";

import { TableStyledProps } from "../../../types";

const TableContainer = styled.div`
  width: 100%;
  background-color: var(--light-gray);
  border-radius: 1rem;
  display: block;
`;

const TableBody = styled.div<TableStyledProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props: TableStyledProps) => props.columnsNumber},
    1fr
  );
  justify-content: center;
  align-items: center;
  grid-gap: 1.5rem;
  padding: 1.5rem;
`;

const TableHeader = styled(TableBody)`
  background-color: var(--bg-secondary-color);
  border-radius: 1rem;
  grid-gap: 1.5rem;
`;

const TableHeadItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 500;
    font-size: 1.3rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--white);
  }
`;

const TableItem = styled(TableHeadItem)`
  span {
    font-weight: 400;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--dark-gray);
  }
`;

export { TableContainer, TableHeader, TableBody, TableHeadItem, TableItem };
