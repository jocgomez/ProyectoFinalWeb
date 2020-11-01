import React from "react";
import CategoryText from "../../Text/CategoryText";
import "./CategoriesList.css";

function CategoriesList() {
  return (
    <div className="o-category-list-container">
      <CategoryText text={"Cortes de cabello"} />
      <CategoryText text={"Cuidado de barba"} />
      <CategoryText text={"Tinturados"} />
      <CategoryText text={"Aplanchados"} />
      <CategoryText text={"Depilación de cejas"} />
      <CategoryText text={"Lavado de cabello"} />
      <CategoryText text={"Extensiones"} />
    </div>
  );
}

export default CategoriesList;
