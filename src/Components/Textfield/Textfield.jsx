import React from "react";
import "./Textfield.css";

function Textfield({ label, type }) {
  return <input type={type} placeholder={label} className="o-input-text" />;
}

export default Textfield;
