import React, { useEffect, useState, useContext } from "react";
import { getMenu } from "../helpers/fetchMenu";
import { Link } from "react-router-dom";
import "../css/homeScreen.css";

import { CartContext } from "../context/cardContext";
import CarritoScreen from "../pages/CarritoScreen";
import Loading from "../components/Loading";
import PostHome from "../components/PostHome";
import SearchAppHome from "../components/SearchAppHome";


const HomeScreen = () => {
  const [actualizar, setActualizar] = useState([]);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
  // const { addItemToCard } = useContext(CartContext);
  useEffect(() => {
    getMenu().then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setMenus(respuesta.menu);
      }
      setLoading(false);
    });
  }, [actualizar]);

  
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.precio,
    0
  );

 
  return (
    <>
    <CarritoScreen/>
      <div className="bgPresentation">
        <div className="container-fluid m-0 p-0 fondo1">
          <div className="row text-center text-white p-5 mx-5">
            <div className="col-12 d-flex justify-content-center logoBox">
              <div>
                <lottie-player
                  src="https://lottie.host/e1b43839-d078-4e7c-85f0-05070eb85b56/D5bHGmpXcs.json"
                  background="transparent"
                  speed="1"
                  autoplay
                ></lottie-player>
              </div>
            </div>
            <div className=" col-12 animate__animated animate__fadeInDown">
              <h2 className="fw-bold"> LA PLATA RESTAURANTE</h2>
            </div>
            <div className=" col-12 mt-5">
              <h4 className="fw-normal">
                Traemos lo mejor del mar a Tucumán y mucho más
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-black">
        <div className="row  d-flex justify-content-center">
          <div className="col-8 buscador mt-5">
          <SearchAppHome/>
          </div>
          <div className="col-4 mt-5 d-flex align-items-center justify-content-start">
            <button className="btnGral fw-bold p-2 mx-2">Buscar</button>
          </div>
          <div className="row menu bg-dark overflow-auto p-3 my-5 d-flex justify-content-center">
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
                <div className="col-12 col-md-8 p-3">
                  <table>
                    <tbody>
                      {menus.map((menu) => (
                        <tr key={menu._id}>
                          <td>
                            <PostHome
                              post={menu}
                              

                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
          {/* <div className="col-12 col-md-12 d-flex aling-items-center justify-content-center">
            <button onClick={() => setCartOpen(!cartOpen)} className="btnGral fw-bold p-2 m-2">Ver pedido : ${total}</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
