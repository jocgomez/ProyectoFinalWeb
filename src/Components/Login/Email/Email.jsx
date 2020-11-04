import React from "react";
import Textfield from "../../Textfield/Textfield";
import OptionsLogin from "./Options/Options";
import "./Email.css";
import Button from "../../Button/Button";
import { BrowserRouter as Router } from 'react-router-dom';
import Route from '../../../Pages/Routes';
import history from './../../../Pages/history';

function EmailLogin() {
  return (
    <div className="o-email-container">
      <div className="o-input-login">
        <div className="o-input-container">
          <Textfield label={"Email"} type={"text"} />
        </div>
        <div className="o-input-container">
          <Textfield label={"Contraseña"} type={"password"} />
        </div>
      </div>

      <div className="o-options-login">
        <OptionsLogin text={"Olvidé mi contraseña"} />
        <OptionsLogin text={"Regístrate"} />
      </div>


      <Button
        colorBackground={"Blue"}
        colorText={"White"}
        text={"Ingresar"}
        onClick={() => { history.push('/home') }}
        icon={""}
      />

    </div>
  );
}

export default EmailLogin;
