import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "../miestilo.css";

const Projects = () => {
  return (
    <section id="projects" className="cont">
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row align-items-center projects">
          <div class="col">
            <h1 className="portadaH1">Noticias</h1>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col">
            <div class="card mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7080.839363337465!2d-59.00589693760377!3d-27.456190823519265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1599654025043!5m2!1ses!2sar"
                className="map"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
              <div class="card-body">
                <h5 class="card-title">CONSULTORIOS MAS CERCANOS</h5>
                <p class="card-text">
                  Mapa con consultorios adheridos mas cercanos.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <img
                src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img11.jpg?raw=true"
                class="card-img-tamano"
                alt="Como adherirte"
              />
              <div class="card-body">
                <h5 class="card-title1">Como sacar turno?</h5>
                <p class="card-text1">
                  Crea un usuario y ya podes sacar un turno!{" "}
                </p>

                <a class="nav-link" href="/Login">
                  Registrarse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
