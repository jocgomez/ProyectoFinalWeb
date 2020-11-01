import React from "react";
import "./Text.css";

function CategoryText({ text }) {
  return (
    <a className="o-light-text o-category-text" href="">
      {text}
    </a>
  );
}

export default CategoryText;
