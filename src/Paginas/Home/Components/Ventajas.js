import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";

const Ventajas = () => {
  return (
    <section id="Ventajas" className="cont">
      <br />
      <br />
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <img
              src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img4.jpg?raw=true"
              class="imagen"
              alt="JOIN"
            />
          </div>
          <div class="col text-col">
            <h1 className="ventajas">ventajas</h1>
            <p>Desde nuestra plataforma podra:</p>
            <p> - Verificar los médicos asociados a su obra social</p>
            <p> - Verificar médicos por especialidad</p>
            <p> - Obtener datos de contacto de especialistas</p>
            <p> - Solicitar turnos a los médicos asociados</p>
            <p> - Y mucho mas...</p>
            <p> - Registrese de manera gratuita:</p>
            <p>
              <a class="nav-link" href="/Login">
                Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventajas;
