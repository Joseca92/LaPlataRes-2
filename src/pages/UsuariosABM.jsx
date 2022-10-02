import React, { useEffect, useState } from "react";
import {getUsuarios, getUsuarioById} from "../helpers/fetchUsuario";
import { Link } from "react-router-dom";
import SearchAppUsuarios from "../components/SearchAppUsuarios";
import PostUsuarios from "../components/PostUsuarios";

import Loading from "../components/Loading";


const UsuariosABM = () => {
  const [permiso, setPermiso] = useState("");
  
  const [mostrarU, setMostrarU] = useState({
    usuario: [],
    total: 0,
  });

  
    
 
  const [actualizar, setActualizar] = useState();
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
  
  
  useEffect(() => {
    const id= JSON.parse(localStorage.getItem("user"))   
         getUsuarioById(id).then((respuesta)=>{
            console.log(respuesta.usuario.role);
            setPermiso(respuesta.usuario.role);     
          });
    
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
    

  }, [actualizar]);

  if(permiso != "ADMIN_ROLE"){
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <div  className="alert alert-danger" role="alert">
              No tiene permisos para acceder a esta seccion
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  setInterval(()=>{
    getUsuarios().then((respuesta)=>{
      setActualizar(respuesta.total);
    })
  
  },10000)

  const handleChange= (e)=>{
    console.log("handleChange")
    let cambio=0;

    setActualizar(cambio+1);
    console.log(cambio+1);

   
  }

  

  return (
    <>
      <div className="container " id="contenedorP">
        <div className="row">
          <div className="col">
            <div className="headUsuario">
              <h3 className="text-center">Bienvenido al ABM de Usuarios!</h3>
              <SearchAppUsuarios />
            </div>

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
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol/s</th>
                            <th scope="col">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                        
                   
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    {mostrarU.usuario.map((mostrar) => (
                      <PostUsuarios
                        post={mostrar}
                        handleChange={handleChange}
                        key={mostrar.uid}
                      />
                    ))}
                  </div>
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