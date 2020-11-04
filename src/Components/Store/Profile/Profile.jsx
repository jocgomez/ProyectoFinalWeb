import React from "react";
import ImageProfile from "../../Images/Profile/ImageProfile";
import Schedule from "../Schedule/Schedule";
import "./Profile.css";

//Perfil del usuario con un banner del establecimiento
function Profile() {
  return (
    <div className="o-profile-container">
      <div className="o-image-profile-container">
        {/* Banner de la tienda */}
        <ImageProfile
          image="https://labuenavidamagazine.com/wp-content/uploads/2018/09/salon-de-belleza.jpg"
          alt="Salon de belleza"
        />
      </div>
      {/* Horario laboral del proveedor */}
      <div className="o-schedule-container">
        <Schedule />
      </div>
    </div>
  );
}

export default Profile;
