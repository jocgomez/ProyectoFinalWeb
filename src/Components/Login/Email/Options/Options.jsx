import React from "react";
import "./Options.css";

function OptionsLogin({ text }) {
  return (
    <a className="o-option" href="/">
      {text}
    </a>
  );
}

export default OptionsLogin;
