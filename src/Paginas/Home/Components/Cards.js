import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <section class="cont" id="hero">
      <div class="container">
        <div class="row cards">
          <div class="col-md-4 d-flex justify-content-center">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h1></h1>
                <img
                  src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/medicos.jpg?raw=true"
                  class="imagen"
                  alt="Medicina"
                />
                <h5 class="card-title">Medicina</h5>
                <p class="card-text">Todas las especialidades disponibles</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex justify-content-center">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h1></h1>
                <img
                  src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img2.jpg?raw=true"
                  class="imagen"
                  alt="Urgencia"
                />
                <h5 class="card-title">Urgencias</h5>
                <p class="card-text">Servicio de urgencias disponibles 24/7.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex justify-content-center">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h1></h1>
                <img
                  src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img3.jpg?raw=true"
                  class="img"
                  alt="Farmacia"
                />
                <h5 class="card-title">Farmacia</h5>
                <p class="card-text">Contamos con servicio de farmacia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex justify-content-center">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h1></h1>
                <img
                  src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/icono.png?raw=true"
                  class="icon"
                  alt="Ver mas"
                />
                <h1></h1>
                <h5 class="card-title">Mas especialidades</h5>
                <p class="card-text">Ingrese para ver mas especialidades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
