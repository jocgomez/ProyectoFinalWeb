import React from 'react'
import Card from './Card/Card';
import './Cards.css'

function Cards (){
    return(
        <div className="o-cards-container">            
            <Card type={"Belleza"} name={"Ana Elena"} profesion={"Estilista profesional"} numStars={2} image={"https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/6/6-preguntas-que-debes-hacerle-a-tu-estilista-antes-de-que-comience-a-trabajar-1.jpg"} />
            <Card type={"Belleza"} name={"Carlos Lopez"} profesion={"Estilista profesional"} numStars={5} image={"https://www.gigantes.com/wp-content/uploads/2020/07/barberos-burbuja-nba.jpg"} />
            <Card type={"Belleza"} name={"Andres Ortiz"} profesion={"Estilista profesional"} numStars={4} image={"https://cdn.shopify.com/s/files/1/0743/6659/files/BPT9-SoyMacho-Barbero-Peluquero-Estilista.png?v=1539290267"} />
            <Card type={"Belleza"} name={"Pedro Caicedo"} profesion={"Estilista profesional"} numStars={1} image={"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2016/06/28/14671157563665.jpg"} />
            <Card type={"Belleza"} name={"Sara Ruiz"} profesion={"Estilista profesional"} numStars={3} image={"https://st2.depositphotos.com/3261171/9216/i/450/depositphotos_92163978-stock-photo-stylist-with-hairdryer-and-brush.jpg"} />
            <Card type={"Belleza"} name={"Mauricio Torres"} profesion={"Estilista profesional"} numStars={5} image={"https://static.iris.net.co/dinero/upload/images/2020/5/18/286456_1.jpg"} />
            <Card type={"Belleza"} name={"Fernando Cortez"} profesion={"Estilista profesional"} numStars={3} image={"https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2020-05/000_1RD1J8.jpg?h=69f2b9d0&itok=iRcwZ0Jm"} />
            <Card type={"Belleza"} name={"Luisa Amado"} profesion={"Estilista profesional"} numStars={2} image={"https://mk0lanoticiavesdar5g.kinstacdn.com/wp-content/uploads/2020/05/mantenerse-seguro-en-salones-belleza.jpeg"} />
            <Card type={"Belleza"} name={"Karen Zapata"} profesion={"Estilista profesional"} numStars={4} image={"https://www.shortcuts.es/wp-content/uploads/2016/03/saloon.jpg"} />
            <Card type={"Belleza"} name={"Juliana Marin"} profesion={"Estilista profesional"} numStars={5} image={"https://cdn-pro.elsalvador.com/wp-content/uploads/2020/05/peluquer%C3%ADas.jpg"} />
            <Card type={"Belleza"} name={"Laura Gomez"} profesion={"Estilista profesional"} numStars={5} image={"https://s3.amazonaws.com/magacin-prod/thumbs/1200x630c/articles/poster/data78229561.jpg"} />
        </div>
    );
}

export default Cards;