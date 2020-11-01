import React from 'react'
import CardImage from '../Images/Card/Card';
import LightText from '../Text/LightText';
import ContentText from '../Text/ContentText';
import './Card.css'

function Card({type, name, profesion, numStars, img}){
    return(
        <div className="o-card-container">
            <div className="o-card-info">
                <LightText text="Belleza"/>
                <ContentText text="Ana Elena" colorText="BlueLight"/>
                <ContentText text="Estilista profesional" colorText="Black"/>            
                <p>Estrellas</p>
            </div>
            <div className="o-card-image">
                <CardImage image="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/6/6-preguntas-que-debes-hacerle-a-tu-estilista-antes-de-que-comience-a-trabajar-1.jpg" />
            </div>
        </div>
    );
}

export default Card;