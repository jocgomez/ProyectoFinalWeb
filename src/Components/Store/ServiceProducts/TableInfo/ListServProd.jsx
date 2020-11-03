import { Table, TableContainer } from "@material-ui/core";
import React from "react";
import "./ListServProd.css";
import TableBodyProvider from "./TableBody/TableBodyProvider";
import TableHeadProvider from "./TableHead/TableHeadProvider";

function ListServProd({ type, elements }) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHeadProvider type={type} />
        <TableBodyProvider type={type} elements={elements} />
      </Table>
    </TableContainer>
  );
}

export default ListServProd;
