import React from "react";
import "../css/navbar.css";
export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/semetres">Semetres</a>
        </li>
        <li>
          <a href="/Horario">Horario</a>
        </li>
      </ul>
    </div>
  );
};
