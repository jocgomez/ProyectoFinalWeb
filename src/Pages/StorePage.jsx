import React from "react";
import ProviderInfo from "../Components/ProviderInfo/ProviderInfo";
import StoreProdServ from "../Components/ServiceProducts/StoreServProd";

function StorePage() {
  return (
    <div>
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
      <StoreProdServ />
    </div>
  );
}

export default StorePage;
