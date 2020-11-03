import { TableCell, TableRow, TableHead } from "@material-ui/core";
import React from "react";
import ContentText from "../../../Text/ContentText";
import "./TableHeadProvider.css";

function TableHeadProvider({ type }) {
  return (
    <TableHead>
      <TableRow>
        {type === "service" ? (
          <TableCell>
            <ContentText text={"SERVICIOS"} colorText={"Black"} />
          </TableCell>
        ) : (
          <TableCell>
            <ContentText text={"PRODUCTOS"} colorText={"Black"} />
          </TableCell>
        )}
        <TableCell>
          <ContentText text={"VALOR"} colorText={"Black"} />
        </TableCell>
        <TableCell align="center">
          <ContentText text={"CANTIDAD"} colorText={"Black"} />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeadProvider;
