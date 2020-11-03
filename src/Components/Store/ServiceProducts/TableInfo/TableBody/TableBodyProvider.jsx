import { TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import CardImage from "../../../../Images/Card/Card";
import ContentText from "../../../../Text/ContentText";
import LightText from "../../../../Text/LightText";
import "./TableBodyProvider.css";
import Icon from "@material-ui/core/Icon";

function TableBodyProvider({ type, elements }) {
  return (
    <TableBody>
      {elements.map((element) => (
        <TableRow key={element.name}>
          <TableCell component="th" scope="row">
            {type === "product" ? (
              <div className="o-body-content">
                <div className="o-image-product-container">
                  <div className="o-image-product">
                    <CardImage image={element.img} />
                  </div>
                  <LightText text={element.name} />
                </div>
              </div>
            ) : (
              <div className="o-body-content">
                <LightText text={element.name} />
              </div>
            )}
          </TableCell>
          <TableCell align="center">
            <div className="o-body-content">
              <ContentText
                text={`$ ${element.value} COP`}
                colorText={"Black"}
              />
            </div>
          </TableCell>
          <TableCell align="center">
            <div className="o-body-content">
              <div className="o-quantity-container">
                <Icon className="o-quantity-icon">remove_circle_outline</Icon>
                <LightText text={element.quantity} />
                <Icon className="o-quantity-icon">add_circle_outline</Icon>
              </div>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableBodyProvider;
