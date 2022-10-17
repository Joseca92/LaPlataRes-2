import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostUsuarios from "../components/PostUsuarios";
import { buscarUsuario, getUsuarios } from "../helpers/fetchUsuario";
import '../css/pedido.css'
import SearchAppUsuarios from "../components/SearchAppUsuarios";

const SearchUsuarios = () => {
  const { termino } = useParams();
  const [usuarios, setUsuarios] = useState([]);
  const [actualizar, setActualizar] = useState();



  useEffect(() => {
    buscarUsuario(termino).then((respuesta) => {
      
      setUsuarios(respuesta.results);
   
      
     
     
    });
  }, [termino,actualizar]);

  const handleChange= (e)=>{
  
    getUsuarios().then((respuesta)=>{
      setActualizar(respuesta.total);
    })
  }

  return (
    <div className="container d-flex flex-column align-items-center" id="contenedorP">
      <div className="row">
       
        <div className="col-12 ">
          <SearchAppUsuarios />
          <h3>Resultados de la búsqueda: Usuario "{termino}"</h3>
          <hr />
          <div className="container contenedor">
                      <div className="row">
                        <div className="col-3">
                          <h5>Nombre</h5>
                        </div>
                        <div className="col-3">
                           <h5>Email</h5>
                        </div>
                        <div className="col-2">
                           <h5>Rol</h5>
                        </div>
                        <div className="col-2">
                          <h5>Estado</h5>
                        </div>
                      </div>
                    </div>
              <div>
                
              </div>
          {usuarios.length > 0 ? (
            usuarios.map((post) => 
            <PostUsuarios  post={post} handleChange={handleChange} key={post.uid} /> )
          ) : (
            <span className="text-muted">No se encontraron registros</span>
          )}
        </div>
      </div>
      <Link className="btn btn-warning " id="btnVolver" to="/usuarios">
                Volver
              </Link>
    </div>
  );
};

export default SearchUsuarios;
