import React from "react";
import "./Text.css";

const colors = {
  BlueLight: "#00D4D8",
  Black: "#333333,",
};

function GetColor(color) {
  let colorCss = colors[color] ? colors[color] : "#333333";
  return colorCss;
}

function ContentText({ text, colorText }) {
  return (
    <p
      className="o-content-text"
      style={{
        color: GetColor(colorText),
      }}
    >
      {text}
    </p>
  );
}

export default ContentText;
