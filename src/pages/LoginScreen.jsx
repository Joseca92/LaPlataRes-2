import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { postAuth } from "../helpers/fetchApp";
import Registro from "./RegistroScreen";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const validarDatos = () => {
    const datos = {
      email,
      password,
    };
    postAuth(datos).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.token) {
        setMessage({ ok: true, msg: "Login ok" });
        localStorage.setItem("token", JSON.stringify(respuesta.token));
        navigate("/");
      } else {
        setMessage(respuesta);
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-header text-center">
              <h2>
                <i className="fa fa-user-circle-o me-3" aria-hidden="true"></i>
                Iniciar Sesion
              </h2>
            </div>
            <div className="card-body text-center">
              <label className="me-3">Usuario</label>
              <br />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <label>Contraseña</label>
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="card-footer d-flex justify-content-evenly">
              <button className="btn btn-outline-dark btn-lg" onClick={validarDatos}>
                Iniciar Sesion
              </button>
              
              <button className="btn btn-outline-dark btn-lg" onClick={Registro}>
                Registrarse
              </button>
            </div>
            
            
          </div>
          {message && (
            <div
              className={
                message?.ok
                  ? "alert alert-success mt-3"
                  : "alert alert-danger mt-3"
              }
              role="alert"
            >
              {message.msg}
            </div>
          )}
          {/* {message &&
            
              <div
                className={
                  item?.token
                    ? "alert alert-success mt-3"
                    : "alert alert-danger mt-3"
                }
                role="alert"
                key={index}
              >
                {item.msg}
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
