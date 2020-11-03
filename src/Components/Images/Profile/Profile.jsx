import React from 'react';
import './Profile.css';

function Profile({ image, alt }) {
    return (
        <img className="o-image-profile" src={image} alt={alt} />
    );
}

export default Profile;