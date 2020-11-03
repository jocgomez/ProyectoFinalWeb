import React from "react";
import ContentText from "../../Text/ContentText";
import ListServProd from "./TableInfo/ListServProd";
import "./StoreServProd.css";
import ButtonsProfile from "../Buttons/ButtonsProfile";

const services = [
  { name: "Corte de cabello", value: 15000, quantity: 1 },
  { name: "Tinte de cabello", value: 59000, quantity: 0 },
  { name: "Lavado de cabello", value: 9000, quantity: 1 },
];

const products = [
  {
    img:
      "https://www.tresemme.com/content/dam/unilever/tresemme/united_states_of_america/pack_shot/00022400002200-1406482-png.png",
    name: "Shampoo TRESemmé",
    value: 25000,
    quantity: 0,
  },
  {
    img:
      "https://images.rappi.com/products/914598-1593565740744.png?d=500x500&e=webp",
    name: "Crema para peinar Pantene",
    value: 30000,
    quantity: 2,
  },
];

function StoreProdServ() {
  return (
    <div className="o-store-prodserv">
      <div>
        <ContentText text={"Mis servicios"} colorText={"BlueLight"} />
        <div className="o-options-buttons">
          <ButtonsProfile />
        </div>
        <div className="o-list-table">
          <ListServProd type={"service"} elements={services} />
        </div>
        <ContentText text={"Mis productos"} colorText={"BlueLight"} />
        <div className="o-list-table">
          <ListServProd type={"product"} elements={products} />
        </div>
      </div>
    </div>
  );
}

export default StoreProdServ;
