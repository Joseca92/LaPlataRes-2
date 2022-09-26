import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../helpers/fetchApp";
import { Link } from "react-router-dom";
import "../css/login.css";
import logo from "../asset/logo.png";

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


      if(respuesta?.errors){
        setMessage(respuesta.errors[0]);
        console.log(respuesta.errors[0].msg);
      }else{
      if (respuesta?.token) {
        setMessage({ ok: true, msg: "Login ok" });
        localStorage.setItem("token", JSON.stringify(respuesta.token));
        localStorage.setItem("user", JSON.stringify(respuesta.usuario.uid));
        navigate("/home");
        console.log("paso por el navigate")
      } else {
        setMessage(respuesta);
      } 
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
                    <Link to="/error" className="link-dark">
                      Olvidé mi contraseña
                    </Link>
                  </div>
               
                <div className="row">
                  <div className="col-6 d-flex justify-content-center ">
                    <button className="btnGral fw-bold p-2" onClick={validarDatos}>Iniciar Sesión</button>
                  </div>
                  <div className="col-6 d-flex justify-content-center ">
                  <Link className="btn btn-primary" to="/Registro">Registrarse</Link>
                  </div>
                </div>
            
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
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
