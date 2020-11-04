import React from "react";
import EmailLogin from "./Email/Email";
import SocialLogin from "./Social/Social";
import "./Login.css";
import LogoLogin from "../Images/LogoLogin/LogoLogin";

function Login() {
  //Sección del lado derecho del login que se compone por el logo, los textfiel para ingresar email y contraseña, asi como tambien los botones de resdes sociales
  return (
    <div className="o-login-container">
      <LogoLogin
        alt={"logo de la empresa"}
        image={
          "https://image.freepik.com/vector-gratis/composicion-conjunto-iconos-peluqueria_1416-899.jpg"
        }
      />
      <div className="o-email-login">
        <EmailLogin />
        <SocialLogin />
      </div>
    </div>
  );
}

export default Login;
