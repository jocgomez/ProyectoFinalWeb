import React from "react";
import "./ImagenLogin.css";

function ImageLogin({ image, alt }) {
  return (
    <div className="o-image-container">
      <img className="o-image-login" src={image} alt={alt} />
    </div>
  );
}

export default ImageLogin;
