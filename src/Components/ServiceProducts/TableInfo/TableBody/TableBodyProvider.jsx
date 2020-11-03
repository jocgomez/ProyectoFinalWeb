import { TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import CardImage from "../../../Images/Card/Card";
import ContentText from "../../../Text/ContentText";
import LightText from "../../../Text/LightText";
import "./TableBodyProvider.css";

function TableBodyProvider({ type, elements }) {
  return (
    <TableBody>
      {elements.map((element) => (
        <TableRow key={element.name}>
          <TableCell component="th" scope="row">
            {type === "product" ? (
              <div className="o-image-product-container">
                <div className="o-image-product">
                  <CardImage image={element.img} />
                </div>
                <LightText text={element.name} />
              </div>
            ) : (
              <LightText text={element.name} />
            )}
          </TableCell>
          <TableCell align="center">
            <ContentText text={element.value} colorText={"Black"} />
          </TableCell>
          <TableCell align="center">
            <LightText text={element.quantity} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableBodyProvider;
