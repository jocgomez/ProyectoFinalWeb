import React from "react";
import AppBar from "../Components/AppBar/AppBar";
import Categories from "../Components/Categories/Categories";
import Cards from "../Components/Cards/Cards";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="o-home-container">
      {/* Se llama el appbar en la parte superior */}
      <AppBar />
      <div className="o-home-content-container">
        {/* Parte inferior de la página, con la tarjeta de categorias y cards de proveedores */}
        <Categories />
        <Cards />
      </div>
    </div>
  );
}

export default HomePage;
