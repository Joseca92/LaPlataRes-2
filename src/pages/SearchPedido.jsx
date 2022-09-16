import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "../components/Post";
import { buscarPedido } from "../helpers/fetchApp";
import '../css/pedido.css'
import SearchApp from "../components/SearchApp";

const SearchBlogsScreen = () => {
  const { termino } = useParams();
  const [pedido, setPedido] = useState([]);
  const [pendiente, setPendiente] = useState();
  const [actualizar, setActualizar] = useState();
  
  



  useEffect(() => {
    buscarPedido(termino).then((respuesta) => {
    
      if (termino == "ppendientes"){
        setPedido(respuesta.other);
        setPendiente("Pendientes");
      }else if(termino == "prealizados"){
        setPedido(respuesta.otherReady);
        setPendiente("Realizados");
      }
      else{
        setPedido(respuesta.results);
        setPendiente(termino);
      }
      setInterval(() => {
        setActualizar(pedido)
      }, 7000);
      
     
     
    });
  }, [termino]);

  return (
    <div className="container " id="contenedorP">
      <div className="row">
      <SearchApp />
        <div className="col-12 col-md-8 offset-md-2">
          <h3>Resultados de la búsqueda: Pedido "{pendiente}"</h3>
          <hr />
          <div className="container contenedor">
                      <div className="row">
                        <div className="col-1">
                          <h5>N°</h5>
                        </div>
                        <div className="col-2">
                           <h5>Cliente</h5>
                        </div>
                        <div className="col-4">
                           <h5>Menu/s</h5>
                        </div>
                        <div className="col-2">
                          <h5>Fecha</h5>
                        </div>
                        <div className="col-2">
                          <h5>Entrega</h5>
                        </div>
                      </div>
                    </div>
              <div>
                
              </div>
          {pedido.length > 0 ? (
            pedido.map((post) => 
            <Post post={post} key={post._id} />)
          ) : (
            <span className="text-muted">No se encontraron registros</span>
          )}
        </div>
      </div>
      <Link className="btn btn-warning" to="/pedido">
                Volver
              </Link>
    </div>
  );
};

export default SearchBlogsScreen;
