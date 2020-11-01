import React from "react";
import "./Dropdown.css";

function Dropdown({ name, options }) {
  return (
    <select name={name} id={name} className="o-dropdown">
      {options.map((element) => {
        return (
          <option value={element.city} key={element.city}>
            {element.city}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
