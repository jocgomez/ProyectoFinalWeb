import React from "react";
import AppBar from "../Components/AppBar/AppBar";
import Categories from "../Components/Categories/Categories";
import Cards from "../Components/Cards/Cards";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="o-home-container">
      <AppBar />
      <div className="o-home-content-container">
        <Categories />
        <Cards />
      </div>
    </div>
  );
}

export default HomePage;
