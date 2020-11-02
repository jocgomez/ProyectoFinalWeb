import React from "react";
import CardImage from "../../Images/Card/Card";
import LightText from "../../Text/LightText";
import ContentText from "../../Text/ContentText";
import "./Card.css";

function Card({ type, name, profesion, numStars, image }) {
  return (
    <div className="o-card-container">
      <div className="o-card-info">
        <LightText text={type} />
        <ContentText text={name} colorText={"BlueLight"} />
        <ContentText text={profesion} colorText={"Black"} />
        <p>Estrellas</p>
      </div>
      <div className="o-card-image">
        <CardImage image={image} />
      </div>
    </div>
  );
}

export default Card;
