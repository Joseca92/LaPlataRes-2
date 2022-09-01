import React, { useEffect, useState } from "react";
import { getMenu } from "../helpers/fetchApp";
import { Link } from "react-router-dom";
import logo from "../asset/logo.png";
import MenuCard from "../components/MenuCard";
import "../css/homeScreen.css";

const HomeScreen = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
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
  }, []);
  return (
    <>
      <div className="bgPresentation">
        <div className="container-fluid m-0 p-0 fondo1">
          <div className="row text-center text-white p-5 mx-5">
            <div className="col-12 logoBox">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className=" col-12">
              <h2 className="fw-bold"> LA PLATA RESTAURANTE</h2>
            </div>
            <div className=" col-12 mt-5">
              <h4 className="fw-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto error dignissimos quibusdam doloribus tenetur et
                unde, alias ad quam possimus qui culpa praesentium perferendis
                commodi! Quod at quam atque laudantium.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  d-flex justify-content-center">
          <div className="col-12 buscador mt-5 d-flex aling-items-center justify-content-center">
            <input type="text" className="fs-5 p-2" placeholder="Buscar..." />
            <button className="btnGral fw-bold p-2 mx-2">Buscar</button>
          </div>
          <div className="col-12 mt-5 categoria"></div>
          <div className="row overflow-auto menu border border-dark border-2 p-3 mt-5 d-flex justify-content-center">
            {loading ? (
              <div className="col-12 col-md-8 loading">
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_zakgeffb.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
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
                <div className="col-12 col-md-8 p-3">
                    <table>
                      <tbody>
                  {menus.map((menu) => (
                      <tr key={menu._id}>
                      <td>
                        <MenuCard
                          precio={menu.precio}
                          nombre={menu.nombre}
                          img={menu.img}
                          detalle={menu.detalle}
                        />
                      </td>
                      <td>
                        <button
                        key={menu._id}
                          className="btnGral fw-bold p-2 mx-2"
                        >
                          +
                        </button>
                      </td>
                  </tr>
                  ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
          <div className="col-12 col-md-12 d-flex aling-items-center justify-content-center">
            <button className="btnGral fw-bold p-2 m-2">Ver pedido : $</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
