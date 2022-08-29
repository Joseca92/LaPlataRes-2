import React, { useEffect, useState } from "react";
import {getPedido} from "../helpers/fetchApp";
import { Link } from "react-router-dom";
import Post from "../components/Post";


const Pedido = () => {
  const [mostrarP, setMostrarP] = useState({
    pedido: [],
    total: 0,
  });

  const [registro, setRegistro] = useState(0);
  const [actualizar, setActualizar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
  
  
  
  useEffect(() => {
    
    getPedido(registro).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setMostrarP({
          pedido: respuesta.pedido,
          total: respuesta.total,
        });
      
    
        setLoading(false);
    
    }});
    setInterval(() => {
      setActualizar(mostrarP)
    }, 7000);
  }, [actualizar]);

 
  const nextPage = () => {
    if (mostrarP.total - registro > 5) {
      console.log("OK");
      setRegistro(registro + 5);
    }
  };

  const prevPage = () => {
    if (registro > 0) {
      console.log("OK");
      setRegistro(registro - 5);
    }
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Bienvenido al ABM de Pedidos!</h1>

          <hr />

          {loading ? (
            <div className="col-12 col-md-8 offset-md-2">
              <h3>Cargando...</h3>
            </div>
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
            <div className="container contenedor">
                      <div className="row">
                        <div className="col-1">
                          <h5>N°</h5>
                        </div>
                        <div className="col">
                           <h5>Cliente</h5>
                        </div>
                        <div className="col-2">
                           <h5>Menu/s</h5>
                        </div>
                        <div className="col">
                          <h5>Fecha</h5>
                        </div>
                        <div className="col">
                          <h5>Entrega</h5>
                        </div>
                      </div>
                    </div>
              <div>
                {mostrarP.pedido.map((mostrar) => (
                  <Post  post={mostrar} key={mostrar.uid} />
                  

                ))}
                

              </div>
            
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pedido;