import React, { useEffect, useState } from "react";
import {getUsuarios} from "../helpers/fetchApp";
import { Link } from "react-router-dom";
import Post from "../components/PostUsuarios";
import '../css/pedido.css'

const UsuariosABM = () => {
  const [mostrarU, setMostrarU] = useState({
    usuario: [],
    total: 0,
  });

 
  const [actualizar, setActualizar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
  
  
  useEffect(() => {
    
    getUsuarios().then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        
          setMostrarU({
          usuario: respuesta.usuario,
          total: respuesta.total,
        });
        
        
      
    
        setLoading(false);
    
    }});
    setInterval(() => {
      setActualizar(mostrarU)
    }, 7000);
  }, [actualizar]);

  return (
    <>
    <div className="container" id="contenedorP">
      <div className="row">
        <div className="col">
          <div className="headPedido">
      
              <h3 className="text-center">Bienvenido al ABM de Usuarios!</h3>  
            </div>


         
          

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
                          <h5>Nombre</h5>
                        </div>
                        <div className="col-2">
                           <h5>Email</h5>
                        </div>
                        <div className="col-4">
                           <h5>Rol</h5>
                        </div>
                        <div className="col-2">
                          <h5>Estado</h5>
                        </div>
                      </div>
                    </div>
              <div>
                {
                mostrarU.usuario.map((mostrar) => (
                  <Post  post={mostrar} key={mostrar.uid} />     
                  ))
    
                }
                

              </div>
            
            </>
          )}
          
   
        </div>
      </div>
    </div>
    </>
  );
}

export default UsuariosABM;