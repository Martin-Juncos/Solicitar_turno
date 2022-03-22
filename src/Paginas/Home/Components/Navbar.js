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
            <h2 className="h2">GestionAR</h2>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#projects">Noticias</a>
          </li>
          <li>
            <a href="#Ventajas">Ventajas</a>
          </li>
          <li>
            <a href="/Login">Ingresar/Registrarse</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
