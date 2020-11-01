import React from "react";
import "./Button.css";
import GmailIcon from "../../Images/Icons/Gmail.png";
import FacebookIcon from "../../Images/Icons/Facebook.png";
import PhoneIcon from "../../Images/Icons/Phone.png";

const colors = {
  Blue: "#1A1446",
  White: "#FFFFFF",
  BlueLight: "#00D4D8",
  Black: "#333333,",
};

const icons = {
  Gmail: GmailIcon,
  Facebook: FacebookIcon,
  Phone: PhoneIcon,
};

function GetColor(color) {
  let colorCss = colors[color] ? colors[color] : "#1A1446";
  return colorCss;
}

function GetIcon(icon) {
  let iconImg = icons[icon] ? icons[icon] : GmailIcon;
  return iconImg;
}

function Button({ colorBackground, colorText, text, onClick, icon }) {
  return icon === "" ? (
    <button
      className="o-button"
      style={{
        backgroundColor: GetColor(colorBackground),
        color: GetColor(colorText),
        borderColor: GetColor(colorBackground),
      }}
    >
      {text}
    </button>
  ) : (
    <div className="o-button-container">
      <button
        className="o-button"
        style={{
          backgroundColor: GetColor(colorBackground),
          color: GetColor(colorText),
          borderColor: GetColor(colorBackground),
        }}
      >
        <img className="o-img-icon" src={GetIcon(icon)} alt={`${icon} icon`}/>
      </button>
    </div>
  );
}

export default Button;
