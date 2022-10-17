import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenuCard from '../components/menuCard';
import { buscarMenu,getMenu } from "../helpers/fetchMenu";
import '../css/pedido.css'
import SearchAppMenu from "../components/SearchAppMenu";

const SearchMenu = () => {
  const { termino } = useParams();
  const [menu, setMenu] = useState([]);
  const [actualizar, setActualizar] = useState([]);



  useEffect(() => {
    buscarMenu(termino).then((respuesta) => {
      setMenu(respuesta.results);
     
    });
  }, [termino, actualizar]);

  const handleChange= (e)=>{
    
    getMenu().then((respuesta)=>{
      setActualizar(respuesta.total);
    })
  }

  return (
    <div className="container d-flex flex-column align-items-center" id="contenedorP">
      <div className="row">
       
        <div className="col-12 ">
          <SearchAppMenu />
          <h3>Resultados de la búsqueda: Menú "{termino}"</h3>
          <hr />
          
        <div>
                
        </div>
          {menu.length > 0 ? (
            menu.map((post) => 
            <MenuCard  post={post} handleChange={handleChange} key={post.uid} /> )
          ) : (
            <span className="text-muted">No se encontraron registros</span>
          )}
        </div>
      </div>
      <Link className="btn btn-warning " id="btnVolver" to="/menu">
                Volver
              </Link>
    </div>
  );
};

export default SearchMenu;
