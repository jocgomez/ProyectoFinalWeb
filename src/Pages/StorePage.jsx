import React from "react";
import AppBar from "../Components/AppBar/AppBar";
import DatePicker from "../Components/Store/DatePicker/DatePicker";
import Profile from "../Components/Store/Profile/Profile";
import ProviderInfo from "../Components/Store/ProviderInfo/ProviderInfo";
import StoreProdServ from "../Components/Store/ServiceProducts/StoreServProd";
import "./StorePage.css";

function StorePage() {
  return (
    <div>
      {/* Se llama el appbar en la parte superior */}
      <AppBar />
      <div className="o-store-page-content">
        {/* Información principal del proveedor, lateral izquierdo*/}
        <ProviderInfo
          img={
            "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/6/6-preguntas-que-debes-hacerle-a-tu-estilista-antes-de-que-comience-a-trabajar-1.jpg"
          }
          name={"Ana Elena"}
          profesion={"Estilista profesional"}
          numStars={4}
          description={
            "Soy Ana Elena, una estilista profesional con más de 5 años de experiencia en la industria de la belleza, en mi establecimiento la comodidad y el cuidado son mis pilares fundamentales."
          }
          adress={"Calle 12 # 34-56, Cali."}
        />
        <div className="o-store-container">
          {/* Contenedor principal de la tienda */}
          <div>
            {/* Perfil de la tienda, con portada y horario */}
            <Profile />
          </div>
          <div className="o-body-store-container">
            {/* Información de productos y servicios de la tienda */}
            <StoreProdServ />
            <div className="o-reserve-store">
              {/* Información de reserva de los productos o servicios de la tienda */}
              <DatePicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorePage;
