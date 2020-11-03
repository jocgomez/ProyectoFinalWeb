import React from 'react';
import ImageProfile from '../Images/Profile/Profile'
import './Profile.css';
import Schedule from './Schedule/Schedule';

function Profile() {
    return (
        <div className="o-profile-container">
            <div className="o-image-container">
                <ImageProfile image="https://labuenavidamagazine.com/wp-content/uploads/2018/09/salon-de-belleza.jpg" alt="Salon de belleza" />
            </div>

            <div className="o-schedule-container">
                <Schedule />
            </div>
        </div>
    );
}

export default Profile;
