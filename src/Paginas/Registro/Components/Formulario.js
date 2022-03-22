import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Formulario.css";
import DataPickers from "./DatePickers";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const Formulario = () => {
  /*const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);*/
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

            

  const comprobar =()=>{
    var pas1 = "#pass1";
    var pas2 = "#pass2";
    return(pas1 === pas2);
  }

  return (
    <form id="survey-form" class="containe">
      <div class="form-group">
        <label id="name-label" for="name">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label id="apellido-label" for="apellido">
          Apellido
        </label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label id="email-label" for="email">
          Mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label id="number-label" for="number">
          Fecha de Nacimiento
        </label>
        <DataPickers />
      </div>

      <div class="form-group">
        <p>Obra social</p>
        <select id="dropdown" name="role" class="form-control" required>
          <option disabled selected value>
            Seleccione Obra Social
          </option>
          <option value="prev">Prevencion Salud</option>
          <option value="Osjera">Osjera</option>
          <option value="Pami">Pami</option>
          <option value="Osecac">Osecac</option>
          <option value="inssep">INSSSEP</option>
          <option value="otra">Otra</option>
          <option value="none">Ninguna</option>
        </select>
      </div>

      <div class="form-group">
        <label id="tel-label" for="tel">
          Numero de contacto:
        </label>
        <input type="text" name="tel" id="tel" class="form-control" required />
        <br />
      </div>

      <div class="form-group">
        <label id="pass1" for="pass">Contraseña:</label>
        <input
          name="pass1"
          type={passwordShown ? "text" : "password"}
          requires
        />
        <i onClick={togglePasswordVisiblity}> {eye}</i>
      </div>

      <div class="form-group">
        <label id="pass2" for="pass">Repetir Contraseña:</label>
        <input
          name="pass2"
          type={passwordShown ? "text" : "password"}
        requires/>
        <i onClick={togglePasswordVisiblity}> {eye}</i>
      </div>





      <div class="form-group">
        <button type="submit" id="submit" class="submit-button" onClick={comprobar}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Formulario;
