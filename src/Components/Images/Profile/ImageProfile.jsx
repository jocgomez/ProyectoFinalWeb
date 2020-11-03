import React from "react";
import "./ImageProfile.css";

function ImageProfile({ image, alt }) {
  return <img className="o-image-profile" src={image} alt={alt} />;
}

export default ImageProfile;
