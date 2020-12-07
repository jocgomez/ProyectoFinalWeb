import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Card from "./Card/Card";
import "./Cards.css";
import history from "./../../Pages/history";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estilistas: [],
      lista: true,
      group: false,
    };
  }

  categ = {};

  componentWillMount() {
    this.getEstilistas();
    this.groupEstilistas(this.props.idFromCateg[0]);
  }

  componentDidUpdate() {
    console.log(this.props.idFromCateg[0]);
    this.groupEstilistas(this.props.idFromCateg[0]);
  }

  getEstilistas = () => {
    axios
      .get("http://localhost:3000/listEstilista")
      .then((res) => {
        this.setState({
          estilistas: res.data,
          lista: false,
        });

        console.log(res.data);
        console.log(this.state.estilistas.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  groupEstilistas = (id_c) => {

    this.categ = {
      id_categ: id_c
    }

    axios
      .post("http://localhost:3000/groupEstilist", qs.stringify(this.categ))
      .then((res) => {
        this.setState({
          estilistas: res.data,
          lista: false,
        });

        console.log(res.data);
        console.log(this.state.estilistas.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.lista) {
      return <h2>cargando</h2>;
    }

    if (this.state.estilistas.data.length > 0) {
      const listEstilsitas = this.state.estilistas.data.map(
        (estilistas, index) => (
          <Card
            key={index}
            type={"Belleza"}
            name={estilistas.nomb_et}
            profesion={estilistas.titulo_et}
            numStars={estilistas.puntaje_et}
            image={estilistas.img_et}
            onClick={() => {
              history.push({
                pathname: "/store",
                search: "?query=abc",
                state: { id: estilistas.id_t_fk, idS: estilistas.id_et },
              });
            }}
          />
        )
      );

      return <div className="o-cards-container">{listEstilsitas}</div>;
    } else {
      return (
        <div className="o-cards-container">
          {
            <Card
              type={"Belleza"}
              name={"Ana Elena"}
              profesion={"Estilista profesional"}
              numStars={2}
              image={
                "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/6/6-preguntas-que-debes-hacerle-a-tu-estilista-antes-de-que-comience-a-trabajar-1.jpg"
              }
              onClick={() => {
                history.push("/store");
              }}
            />
          }
        </div>
      );
    }
  }
}

export default Cards;
