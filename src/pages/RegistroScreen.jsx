import React, { useState } from "react";
import { postUsuario } from "../helpers/fetchApp";

const Registro = () => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "USER_ROLE",
  });

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
    <div className="container mt-5">
      <div className="row">
          <div className="card-header text-center">
            <h2>
              <i className="fa fa-user-circle-o fa-4x" aria-hidden="true"></i> Registro
              de Usuario
            </h2>
          </div>
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
              <div className="card ">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                  <div className="card-body text-center">
                  <label>Nombre y apellido</label>
                  <input
                  type="text"
                  className="form-control mb-2"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
                  required
                  />
                  </div>
                </div>
                <div className="form-group">
                <div className="card-body text-center">
                <label>Correo electrónico</label>
                <input
                type="email"
                className="form-control mb-2"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                />
                  </div>
                  </div>
                <div className="form-group">
                <div className="card-body text-center">
                  <label>Contraseña</label>
                  <input
                type="password"
                className="form-control mb-2"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
                />
                </div></div>
                <div className="d-grid">
                <button className="btn btn-outline-dark btn-lg mt-5 ">Guardar</button>
                </div>
              </form>
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
    </div>
  );
};

export default Registro;
