import Rating from "@material-ui/lab/Rating";
import React from "react";
import CardImage from "../Images/Card/Card";
import Map from "../Map/Map";
import ContentText from "../Text/ContentText";
import LightText from "../Text/LightText";
import "./ProviderInfo.css";

function ProviderInfo({ img, name, profesion, numStars, description, adress }) {
  return (
    <div className="o-provider-container">
      <div className="o-image-container">
        <CardImage image={img} />
      </div>
      <div className="o-personal-info">
        <ContentText text={name} colorText={"BlueLight"} />
        <ContentText text={profesion} colorText={"Black"} />
        <Rating name="read-only" value={numStars} readOnly />
      </div>
      <div className="o-buissnes-info">
        <ContentText text={"¿Quién soy?"} colorText={"BlueLight"} />
        <LightText text={description} />
        <ContentText text={adress} colorText={"Black"} />
        <Map />
      </div>
    </div>
  );
}

export default ProviderInfo;
