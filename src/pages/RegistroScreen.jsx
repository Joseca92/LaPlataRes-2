import React, { useState } from "react";
import { postUsuario } from "../helpers/fetchApp";
import logo from "../asset/logoBlack.png";
import "../css/registro.css";

const RegistroScreen = () => {
<<<<<<< HEAD
  // const [formValues, setFormValues] = useState({
  //   nombre: "",
  //   email: "",
  //   password: "",
  //   role: "USER_ROLE",
  // });
=======
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "USER_ROLE",
  });
>>>>>>> 0529ae5413799f7348241f4e153fb46b7833666c

  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postUsuario(formValues).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.errors) {
        setMessage(respuesta.errors);
      } else {
        setMessage([{ ok: true, msg: "Registro exitoso!" }]);
        setFormValues({
          nombre: "",
          email: "",
          password: "",
          role: "USER_ROLE",
        });
        setTimeout(() => {
          setMessage([]);
        }, 2000);
      }
    });
  };

  return (
    <div className="container-fluid boxContainer bgFondo">
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <div className="card mt-5 fondo3 p-3 ">
            <div className="card-body">
              <div className="col-12 text-center">
                <img className="logo" src={logo} alt="Logo de la Plata" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="card-body text-center">
                    <input
                      type="text"
                      className="form-control border-0 text-white"
                      name="nombre"
                      placeholder="Nombre"
                      value={formValues.nombre}
                      onChange={handleChange}
                      required
                    />
                    <hr />
                  </div>
                </div>
                <div className="form-group">
                  <div className="card-body text-center">
                    <input
                      type="email"
                      className="form-control border-0 text-white"
                      name="email"
                      placeholder="Correo electrónico"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                    <hr />
                  </div>
                </div>
                <div className="form-group">
                  <div className="card-body text-center">
                    <input
                      type="password"
                      className="form-control border-0 text-white"
                      name="password"
                      placeholder="Contraseña"
                      value={formValues.password}
                      onChange={handleChange}
                      required
                    />
                    <hr />
                  </div>
                </div>
                <div className="d-grid">
                  <button className="btnGral fw-bold p-2">Registrarme</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {message.length > 0 &&
            message.map((item, index) => (
              <div
                className={
                  item?.ok
                    ? "alert alert-success mt-3"
                    : "alert alert-danger mt-3"
                }
                role="alert"
                key={index}
              >
                {item.msg}
              </div>
            ))}
      </div>
    </div>
  );
};

export default RegistroScreen;
