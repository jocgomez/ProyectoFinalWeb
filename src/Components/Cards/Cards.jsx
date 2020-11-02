import { CircularProgress } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect } from "react";
import Card from "./Card/Card";

const operation = retry.operation({
  retries: 5,
  factor: 3,
  minTimeout: 1 * 1000,
  maxTimeout: 60 * 1000,
  randomize: true,
});

function Cards({ nCards }) {
  const [users, SetUsers] = React.useState([]);

  useEffect(async () => {
    //PARA PROBAR ESTO NECESITAS ACTIVAR ESA EXTENSION DE CORPS POLICY

    //ES NECESARIO LLAMAR ESTA API "nCards" VECES PERO NO HE PODIDO.
    //SE TIENE QUE LLENAR EL ARREGLO "users" PARA RETORNAR X CARDS CON SU INFORMACIÓN
    for (let i = 0; i < nCards; i++) {
      //Api para traer nombres e imagenes de personas aleatorias
      Axios.get("https://randomuser.me/api/")
        .then((response) => {
          //Si se llama la API pero a veces falla entonces por ejemplo me trae 1 o 2 resultados, nosotros necesitamos
          //"nCards" resultados, buscate como funcionan los retry en esta libreria Axios para volver a llamar la consulta cuando falle
          var result = response.data;
          var name =
            result.results[0].name.first + " " + result.results[0].name.last;
          var image = result.results[0].picture.large;
          //Se crea un objeto usuario con un nombre y una imagen
          var user = { name: name, image: image };
          console.log(user);
          //Se suma al arreglo de usuarios
          SetUsers(users.push(user));
          console.log(users.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  if (users.length !== nCards) {
    return <CircularProgress />;
  } else {
    return (
      <div className="o-cards-container">
        {console.log(users)}

        {/* {users.map((user) => {
        const rand = 0 + Math.random() * (5 - 0);
        console.log("/////");
        console.log(users.length);
        return (
          <Card
            type={"Belleza"}
            name={user.name}
            profesion={"Estilista profesional"}
            numStars={rand}
            image={user.image}
          />
        );
      })} */}
      </div>
    );
  }
}

export default Cards;
