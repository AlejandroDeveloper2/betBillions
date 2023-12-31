import { TableItemProps, TableOptions, TableProps, TableRowProps } from "types";

import {
  TableBody,
  TableContainer,
  TableHeadItem,
  TableHeader,
  TableItem,
  TableRowContainer,
  RowBar,
  OptionsField,
} from "./Table.style";

const Table = (props: TableProps): JSX.Element => {
  const { children, headers, columnsNumber, title } = props;
  return (
    <TableContainer>
      <h1>{title}</h1>
      <TableHeader columnsnumber={columnsNumber}>
        {headers.map((header, index) => (
          <TableHeadItem key={index}>
            <header.Icon />
            <span>{header.label}</span>
          </TableHeadItem>
        ))}
      </TableHeader>
      <TableBody>{children}</TableBody>
    </TableContainer>
  );
};

const TableBodyItem = (props: TableItemProps): JSX.Element => {
  const { value, Icon, label } = props;
  return (
    <TableItem>
      <Icon />
      <span>{label}:</span>
      <span>{value}</span>
    </TableItem>
  );
};

const TableBodyOptions = ({ children }: TableOptions): JSX.Element => {
  return <OptionsField>{children}</OptionsField>;
};

const TableRow = ({ children, columnsNumber }: TableRowProps): JSX.Element => {
  return (
    <TableRowContainer columnsnumber={columnsNumber}>
      <RowBar></RowBar>
      {children}
    </TableRowContainer>
  );
};

Table.Item = TableBodyItem;
Table.Row = TableRow;
Table.Options = TableBodyOptions;

export default Table;
