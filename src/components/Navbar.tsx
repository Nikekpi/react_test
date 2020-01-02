import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <a href="/" className="brand-logo">
          React
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список справ</NavLink>
          </li>
          <li>
            <NavLink to="/manufacturers">Виробники</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
