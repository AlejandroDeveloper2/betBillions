import { TableItemProps, TableProps } from "../../../types";

import {
  TableBody,
  TableContainer,
  TableHeadItem,
  TableHeader,
  TableItem,
} from "./Table.style";

const Table = (props: TableProps): JSX.Element => {
  const { children, headers, columnsNumber } = props;
  return (
    <TableContainer>
      <TableHeader columnsNumber={columnsNumber}>
        {headers.map((header, index) => (
          <TableHeadItem key={index}>
            <span>{header}</span>
          </TableHeadItem>
        ))}
      </TableHeader>
      <TableBody columnsNumber={columnsNumber}>{children}</TableBody>
    </TableContainer>
  );
};

const TableBodyItem = (props: TableItemProps): JSX.Element => {
  const { value } = props;
  return (
    <TableItem>
      <span>{value}</span>
    </TableItem>
  );
};

Table.Item = TableBodyItem;

export default Table;
