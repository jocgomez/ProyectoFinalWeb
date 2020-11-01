import React from "react";
import "./LogoAppBar.css";

function LogoAppBar({ img, alt }) {
  return <img className="o-logo-appbar" src={img} alt={alt} />;
}

export default LogoAppBar;
