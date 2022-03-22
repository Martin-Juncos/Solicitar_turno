import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Maps from "./Components/Maps";
import "../Ingresar.css";

const Projects = () => {
  return (
    <section id="projects" className="cont">
      <div class="container">
        <div class="row align-items-center projects">
          <div class="col">
            <h1>Noticias</h1>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col">
            <div class="card mb-3">
              <Maps />
              <div class="card-body">
                <h5 class="card-title">CONSULTORIOS MAS CERCANOS</h5>
                <p class="card-text">
                  Mapa con consultorios adheridos mas cercanos.
                </p>
                <p class="card-text">
                  <small class="text-muted">-</small>
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
                <h5 class="card-title">Como sacar turno?</h5>
                <p class="card-text">
                  Crea un usuario y ya podes sacar un turno!{" "}
                </p>
                <p class="card-text">
                  <small class="text-muted">-</small>
                </p>
                <a class="nav-link" href="/Login">
                  Registrarse
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-3">
            <img
              src="/assets/photoshop.png"
              class="card-img-tamano"
              alt="formulario o mas imagenes"
            />
            <div class="card-body">
              <h5 class="card-title">-</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">-</small>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <img
              src="/assets/iconoyoutube.png"
              class="card-img-tamano"
              alt="y eña"
            />
            <div class="card-body">
              <h5 class="card-title">-</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
