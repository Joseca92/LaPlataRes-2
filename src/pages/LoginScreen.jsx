import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postAuth } from "../helpers/fetchApp";
import "../css/login.css";
import logo from "../asset/logoBlack.png";
import RegistroScreen from "./RegistroScreen";

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
    <div className="container-fluid boxContainer bgFondo">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 mt-5">
          <div className="card fondo3">
            <div className="card-body">
              <div className="col-12 text-center">
                <img className="logo" src={logo} alt="Logo de la Plata" />
              </div>
              <form>
                <div className="form-group"></div>
                <div className="form-group">
                  <div className="card-body text-center">
                    <input
                      type="email"
                      className="form-control border-0"
                      name="email"
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <hr />
                  </div>
                </div>
                <div className="form-group">
                  <div className="card-body text-center">
                    <input
                      type="password"
                      className="form-control border-0"
                      name="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <hr />
                    <a href="#" className="link-dark">
                      Olvidé mi contraseña
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex justify-content-center ">
                    <button className="btnGral fw-bold p-2" onClick={validarDatos}>Iniciar Sesión</button>
                  </div>
                  <div className="col-6 d-flex justify-content-center ">
                    {/* <button  className="btnGral fw-bold p-2" NavLink to="/registro">Registrarse</button> */}
                    <NavLink to="/registro"> <button  className="btnGral fw-bold p-2">Registrarse</button></NavLink>
                  </div>
                </div>
              </form>
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
          {/* { {message &&
            
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
