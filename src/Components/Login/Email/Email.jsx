import React from "react";
import Textfield from "../../Textfield/Textfield";
import OptionsLogin from "./Options/Options";

function EmailLogin() {
  return (
    <div>
      <Textfield label="Email" type="text" />
      <Textfield label="Contraseña" type="password" />
      <OptionsLogin text="Registrate" />
      <OptionsLogin text="Olvidé mi contraseña" />
    </div>
  );
}

export default EmailLogin;
