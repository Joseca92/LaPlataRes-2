import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { postAuth } from "../helpers/fetchApp";
import Registro from "./RegistroScreen";
import "../css/login.css";
import logo from "../asset/logoBlack.png";

const LoginScreen = () => {
  // const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState(null);

  // const validarDatos = () => {
  //   const datos = {
  //     email,
  //     password,
  //   };
  //   postAuth(datos).then((respuesta) => {
  //     console.log(respuesta);
  //     if (respuesta?.token) {
  //       setMessage({ ok: true, msg: "Login ok" });
  //       localStorage.setItem("token", JSON.stringify(respuesta.token));
  //       navigate("/");
  //     } else {
  //       setMessage(respuesta);
  //     }
  //   });
  // };

  return (
    <div className="container-fluid  bgFondo">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 mt-5">
          <div class="card fondo3">
            <div class="card-body">
              <div className="col-12 text-center">
                <img className="logo" src={logo} alt="Logo de la Plata" />
              </div>
              <form /*onSubmit={handleSubmit}*/>
                <div className="form-group"></div>
                <div className="form-group">
                  <div className="card-body text-center">
                    <input
                      type="email"
                      className="form-control border-0"
                      name="email"
                      placeholder="Correo electrónico"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
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
                      // value={password}
                      //onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <hr />
                    <a href="#" class="link-dark">
                      Olvidé mi contraseña
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex justify-content-center ">
                    <button className="btnGral fw-bold p-2" /*onClick={validarDatos}*/>Iniciar Sesión</button>
                  </div>
                  <div className="col-6 d-flex justify-content-center ">
                    <button className="btnGral fw-bold p-2" /*onClick={Registro}*/>Registrarse</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* {message && (
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
          )} */}
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
