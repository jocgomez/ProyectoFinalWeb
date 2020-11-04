import { Icon } from "@material-ui/core";
import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import LogoAppBar from "../../Images/LogoAppBar/LogoAppBar";
import Textfield from "../../Textfield/Textfield";
import "./AppBarContent.css";
import history from './../../../Pages/history';

const cities = [
  { city: "Cali" },
  { city: "Bogotá" },
  { city: "Medellín" },
  { city: "Cartagena" },
  { city: "Palmira" },
];

function AppBarContent() {
  //App bar con el logo y los campos para busqueda y cerrar sesión
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
      <div className="o-search-container">
        <Dropdown className="o-dropdown" name={"city"} options={cities} />
        <Textfield label={"Dirección"} type={"text"} />
      </div>
      <a onClick={() => { history.push('/') }}><Icon className="o-exit-icon">exit_to_app</Icon></a>      
    </div>
  );
}

export default AppBarContent;
