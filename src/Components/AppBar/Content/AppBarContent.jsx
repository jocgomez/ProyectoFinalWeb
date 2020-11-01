import { Icon } from "@material-ui/core";
import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import LogoAppBar from "../../Images/LogoAppBar/LogoAppBar";
import Textfield from "../../Textfield/Textfield";
import "./AppBarContent.css";

const cities = [
  { city: "Cali" },
  { city: "Bogotá" },
  { city: "Medellín" },
  { city: "Cartagena" },
  { city: "Palmira" },
];

function AppBarContent() {
  return (
    <div className="o-content-container">
      <div className="o-logo-container">
        <LogoAppBar
          alt={"Logo barberia horizontal"}
          img={
            "https://image.freepik.com/free-vector/composition-set-icons-barber-shop_1416-606.jpg"
          }
        />
      </div>
      <Textfield label={"Buscar proveedor"} type={"text"} icon={"search"} />
      <div>
        <Dropdown name={"city"} options={cities} />
      </div>
      <div>
        <Textfield label={"Dirección"} type={"text"} />
      </div>
      <div>
        <Icon>exit_to_app</Icon>
      </div>
    </div>
  );
}

export default AppBarContent;
