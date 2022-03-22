import React from "react";
import NavbarIn from "./Components/NavbarIn";
import Carrousel from "./Components/Carrousel";
import GoogleButton from "react-google-button";
import "./Ingresar.css";

const Ingresar = () => {
  return (
    <section>
      <NavbarIn />
      <div className="contain">
        <Carrousel />
        <h1>Bienvenido</h1>
        <div class="formu">
          <div>
            <div>
              <form class="mb-5" action="{% url 'login' %}" method="post">
                <div class="mb-4">
                  <br />
                  <label
                    for="exampleInputEmail1"
                    class="font-weight-bold"
                    id="lab"
                  >
                    Ingrese Usuario
                  </label>

                  <input
                    type="text"
                    class="form-control bg-dark-x border-0"
                    name="user"
                    placeholder="Ingrese su usuario"
                    aria-describedby="IDHelp"
                  />
                </div>

                <div class="mb-4">
                  <label
                    id="lab"
                    for="exampleInputPassword1"
                    class="lab font-weight-bold"
                  >
                    Contraseña
                  </label>

                  <input
                    type="password"
                    class="form-control bg-dark-x border-0 mb-2"
                    placeholder="Ingresa tu contraseña"
                    name="pass"
                  />

                  <a href="/" className="registro">
                    ¿Has olvidado tu contraseña? -
                  </a>
                  <a href="/Register" className="registro">
                    - ¿Aún no te registraste?
                  </a>
                </div>
                <button type="submit" class="submit">
                  Iniciar sesión
                </button>
                <br />

                <p class="font-weight-bold text-center text-muted">
                  O inicia sesión con
                </p>
                <div className="d-flex justify-content-around">
                  <ul>
                    <li>
                      <GoogleButton type="dark" className="google" href="" />
                    </li>
                    <li>
                      <a href="" class="fb connect">
                        Sign in with Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ingresar;
