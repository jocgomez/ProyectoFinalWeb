import React from "react";
import ImageProfile from "../../Images/Profile/ImageProfile";
import Schedule from "../Schedule/Schedule";
import "./Profile.css";

function Profile() {
  return (
    <div className="o-profile-container">
      <div className="o-image-profile-container">
        <ImageProfile
          image="https://labuenavidamagazine.com/wp-content/uploads/2018/09/salon-de-belleza.jpg"
          alt="Salon de belleza"
        />
      </div>

      <div className="o-schedule-container">
        <Schedule />
      </div>
    </div>
  );
}

export default Profile;
