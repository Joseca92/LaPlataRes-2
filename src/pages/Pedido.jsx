import React, { useEffect, useState } from "react";
import { getUsuarioById } from "../helpers/fetchUsuario";

import { getPedido } from "../helpers/fetchApp";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import "../css/pedido.css";
import SearchApp from "../components/SearchApp";
import Loading from "../components/Loading";

const Pedido = () => {
  const [mostrarP, setMostrarP] = useState({
    pedido: [],
    total: 0,
  });

  const [permiso, setPermiso] = useState("");
  const [actualizar, setActualizar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user"));
    console.log(id);
    getUsuarioById(id).then((respuesta) => {
      console.log(respuesta.usuario.role);
      setPermiso(respuesta.usuario.role);
    });

    getPedido().then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setMostrarP({
          pedido: respuesta.pedido,
          total: respuesta.total,
        });
        setLoading(false);
      }
    });
  }, [actualizar]);

  if (permiso != "ADMIN_ROLE") {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="alert alert-danger" role="alert">
              No tiene permisos para acceder a esta seccion
            </div>
          </div>
        </div>
      </div>
    );
  }

  setInterval(() => {
    getPedido().then((respuesta) => {
      setActualizar(respuesta.total);
    });
  }, 10000);
  const handleChange = (e) => {
    console.log("handleChange");
    let cambio = 0;

    setActualizar(cambio + 1);
    console.log(cambio + 1);
  };

  return (
    <>
      <div className="container" id="contenedorP">
        <div className="row">
          <div className="col">
            <div className="headPedido">
              <h3 className="text-center">Bienvenido al ABM de Pedidos!</h3>
            </div>
            <SearchApp />

            <hr />

            {loading ? (
              <Loading />
            ) : mensaje ? (
              <div className="col-12 col-md-6 offset-md-3">
                <div className="alert alert-danger" role="alert">
                  {mensaje}
                </div>
                <Link className="btn btn-primary" to="/login">
                  Volver
                </Link>
              </div>
            ) : (
              <>
                <div className="contenedorGeneral">
                  <div className="container contenedor">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Menu/s</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Entrega</th>
                          </tr>
                        </thead>
                        <tbody>
                        {mostrarP.pedido.map((mostrar) => (
                        <Post
                        post={mostrar}
                        handleChange={handleChange}
                        key={mostrar.uid}
                      />
                    ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pedido;