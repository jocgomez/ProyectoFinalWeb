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

function Textfield({ label, type, icon }) {
  return icon ? (
    <div className="o-input-icon-container">
      <Icon className="o-icon-input">{GetIcon(icon)}</Icon>
      <input
        type={type}
        placeholder={label}
        className="o-input-text"
        style={{ paddingLeft: 32 }}
      />
    </div>
  ) : (
    <input type={type} placeholder={label} className="o-input-text" />
  );
}

export default Textfield;
