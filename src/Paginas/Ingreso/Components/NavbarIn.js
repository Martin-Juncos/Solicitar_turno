import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li className="izquierda">
            <img
              className="logo"
              src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/logoGestionar.png?raw=true"
              alt="logo"
            />
          </li>
          <li className="izquierda">
            <a href="/">GestionAR</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
