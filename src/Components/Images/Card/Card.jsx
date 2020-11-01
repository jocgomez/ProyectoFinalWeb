import React from 'react'
import './Card.css'

function CardImage({image}){
    return(
        <img src={image} alt="Proveedor" className="o-image"/>
    )   
}

export default CardImage;