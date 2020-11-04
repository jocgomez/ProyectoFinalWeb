import React from "react";
import "./Text.css";

//Texto enlace de los textos de las categorias
function CategoryText({ text }) {
  return (
    <a className="o-light-text o-category-text" href="">
      {text}
    </a>
  );
}

export default CategoryText;
