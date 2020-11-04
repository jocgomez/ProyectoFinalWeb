import { Icon } from "@material-ui/core";
import React from "react";
import "./Textfield.css";

const icons = {
  search: "search",
};

function GetIcon(icon) {
  let iconImg = icons[icon] ? icons[icon] : "search";
  return iconImg;
}

//Input de texto, se especifica el label, tipo de input y si posee o no un icono
function Textfield({ label, type, icon }) {
  return icon ? (
    <div className="o-input-icon-container">
      {/* En caso de tener icono se retorna un input con icon sobrepuesto */}
      <Icon className="o-icon-input">{GetIcon(icon)}</Icon>
      <input
        type={type}
        placeholder={label}
        className="o-input-text"
        style={{ paddingLeft: 32 }}
      />
    </div>
  ) : (
    //Input de texto generico
    <input type={type} placeholder={label} className="o-input-text" />
  );
}

export default Textfield;
