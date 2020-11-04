import React from "react";
import PrincipalTitle from "../Text/PrincipalTitle";
import CategoriesList from "./CategoriesList/CategoriesList";
import "./Categories.css";

function Categories() {
  //Seccion lateral izquierda donde estan las categorias relacionadas con peluqueria
  return (
    <div className="o-category-container">
      <PrincipalTitle text={"Categorías"} />
      <CategoriesList />
    </div>
  );
}

export default Categories;
