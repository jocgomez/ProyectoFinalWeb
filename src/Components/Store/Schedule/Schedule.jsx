import React from "react";
import ContentText from "../../Text/ContentText";
import LightText from "../../Text/LightText";
import "./Schedule.css";

//Horario de la tienda
function Schedule() {
  return (
    //Se establece el horario del salon de belleza en sus determinados dias
    <div className="o-schedule-container">
      <ContentText text="SALON DE BELLEZA ESTILOS" colorText="BlueLight" />
      <div className="o-titles-container">
        <ContentText text="HORARIO" colorText="BlueLight" />
        <div className="o-hours-container">
          <div className="o-hours">
            <ContentText text="Lunes - Viernes" colorText="Blue" />
            <LightText text="8:00 am - 12:00 am" />
            <LightText text="1:00 pm - 8:00 pm" />
          </div>

          <div>
            <ContentText text="Sábado - Domingo - Festivos" colorText="Blue" />
            <LightText text="8:00 am - 12:00 am" />
            <LightText text="1:00 pm - 3:00 pm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
