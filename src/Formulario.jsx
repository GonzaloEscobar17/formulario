import React from "react";
import "./formulario.css";
import Fondo from "./assets/foto.png";
function Formulario() {
  return (
    <div className="contenedor">
      <div className="col1">
        <h2>Registrate para ser el primero en jugar ArcaneLegends 🎮</h2>
        <img src={Fondo} alt="Fondo" />
      </div>
      <div className="col2">
        <div className="info">
          <div className="contenedor-form">
            <h2>Registrarse</h2>
            <form>
              <div className="entrada">
                <label htmlFor="nombre">Nombre Completo</label>
                <input type="text" id="nombre" name="nombre" />
              </div>
              <div className="entrada">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="entrada">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
