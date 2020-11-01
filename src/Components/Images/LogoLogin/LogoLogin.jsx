import React from "react";
import "./LogoLogin.css";

function LogoLogin({ image, alt }) {
  return <img className="o-logo" src={image} alt={alt} />;
}

export default LogoLogin;
