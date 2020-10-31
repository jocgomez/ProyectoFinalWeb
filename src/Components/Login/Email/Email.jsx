import React from "react";
import Textfield from "../../Textfield/Textfield";
import OptionsLogin from "./Options/Options";
import "./Email.css";

function EmailLogin() {
  return (
    <div>
      <div className="o-input-login">
        <Textfield label={"Email"} type={"text"} />
        <Textfield label={"Contraseña"} type={"password"} />
      </div>
      <div className="o-options-login">
        <OptionsLogin text={"Olvidé mi contraseña"} />
        <OptionsLogin text={"Registrate"} />
      </div>
    </div>
  );
}

export default EmailLogin;
