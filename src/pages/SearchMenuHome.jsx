import React, { useEffect, useState ,useContext} from "react";
import { CartContext } from "../context/cardContext";
import { Link, useParams } from "react-router-dom";
import MenuCard from '../components/menuCard';
import { buscarMenu,getMenu } from "../helpers/fetchMenu";
import '../css/pedido.css'
import SearchAppMenu from "../components/SearchAppMenu";
import PostHome from "../components/PostHome";
import CarritoScreen from "../pages/CarritoScreen";


const SearchMenuHome = () => {
  const { termino } = useParams();
  const [menu, setMenu] = useState([]);
  const { addItemToCard } = useContext(CartContext);



  useEffect(() => {
    buscarMenu(termino).then((respuesta) => {
      setMenu(respuesta.results);
     
    });
  }, [termino]);
  const handleClick=()=>{
    addItemToCard(menu)
  }

  

  return (
    <>
    <CarritoScreen/>
    <div className="container d-flex flex-column align-items-center" id="contenedorP">
      <div className="row">
       
        <div className="col-12 ">
          <SearchAppMenu />
          <h3>Resultados de la búsqueda: Menú "{termino}"</h3>
          <hr />
          
        <div>
                
        </div>
        <div class="container">
          <div class="row d-flex  align-items-center">
            <div class="col">
                {menu.length > 0 ? (
                     menu.map((post) => 
                     <PostHome  post={post} handleClick={handleClick} key={post.uid} /> )
                    ) : (
                   <span className="text-muted">No se encontraron registros</span>
                  )}

              
            </div>
            <div class="col-2">
           {/* <button
                key={menu._id}
                onClick={() => addItemToCard(menu)}
                className="btnGral fw-bold p-2 mx-2">
                Agregar
                </button> */}
            </div>
          
          </div>
        </div>
          
        </div>

      </div>
      <Link className="btn btn-warning " id="btnVolver" to="/">
                Volver
              </Link>
    </div>
    </>
  );
};

export default SearchMenuHome;