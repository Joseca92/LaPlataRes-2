import React, { useState, useEffect } from "react";
import { getCategoria, postMenu, getMenu } from "../helpers/fetchApp";
// import MenuCard from "../components/MenuCard";
//import { Link } from "react-router-dom";
import "../css/menuScreen.css"
import Axios from 'axios'

const MenuScreen = () => {
  const [mensaje, setMensaje] = useState([]);
 // const [mensajes, setMensajes] = useState("");
  const [nombre, setNombre] = useState("");
  const [estadoMenu, setEstadoMenu] = useState(true);
  const [detalle, setDetalle] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [imagen, setImagen] = useState("");
 // const [loading, setLoading] = useState(true);

  // //traer lo menus
  // const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   getMenu().then((respuesta) => {
  //     console.log(respuesta);
  //     if (respuesta?.msg) {
  //       setMensajes(respuesta.msg);
  //     } else {
  //       setMenus(respuesta.menu);
  //     }
  //     setLoading(false);
  //   });
  // }, []);

  const guardar = async(e) => {
    e.preventDefault();
    const datos = {
      nombre,
      detalle,
      imagen,
      estadoMenu,
      categoria,
      precio,
    };

    if(nombre===""){
      Swal.fire({
        icon:'error',
        title:'Debe escribir un nombre',
        showConfirmButton:false,
        timer:1500
      })
    }
      if(detalle===""){
        Swal.fire({
          icon:'error',
          title:'Debe escribir un detalle',
          showConfirmButton:false,
          timer:1500
        })
      }
        if(imagen===""){
          Swal.fire({
            icon:'error',
            title:'Debe colocar una imagen',
            showConfirmButton:false,
            timer:1500
          })
        }
          if(precio===""){
            Swal.fire({
              icon:'error',
              title:'Debe especificar el precio',
              showConfirmButton:false,
              timer:1500
            })

    }
    else{
      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.post('/menu',datos,{
        headers:{'autorizacion':token}
      })

      const mensaje = respuesta.data.mensaje
      console.log(mensaje)
      Swal.fire({
        icon:'success',
        title:mensaje,
        showConfirmButton:false,
        timer:1500
      })

      e.target.reset();
      setNombre("");
      setdetalle("");
      setEstadoMenu(true);
      setPrecio(0);
      setCategoria([0]);
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    };

    // postMenu(datos).then((respuesta) => {
    //   console.log(respuesta.errors);
    //   if (respuesta?.errors) {
    //     setMensaje(respuesta.errors);
    //   } else {
    //     setMensaje([{ msg: "¡Nuevo Menú creado!" }]);
    //   }
    //   setNombre("");
    //   setdetalle("");
    //   setEstadoMenu(true);
    //   setPrecio(0);
    //   setCategoria("");
    //   setTimeout(() => {
    //     setMensaje("");
    //   }, 3000);
    // });
  };
  useEffect(() => {
    getCategoria().then((respuesta) => {
      console.log(respuesta);
      setCategorias(respuesta.categoria);
    });
  }, []);

  return (
    <>
      <div className="container boxContainer">
        <div className="row mt-5">
          <div className="col">
            <h1>Administración de Menú</h1>
            <hr />
          </div>
        </div>
        {/* modalBoton */}
        <div className="row">
          <div className="col-5">
            
        <button
          type="button"
          className="btn btn-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Nuevo Menú
        </button>
          </div>
      {/* modal */}
      <div
          className="modal fade"
          id="exampleModal"
          // tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Crear nuevo menú
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="formulario" onSubmit={guardar}>
                  <label>Nombre</label>
                  <input
                    id="nombre"
                    className="form-control"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <label>Descripción</label>
                  <textarea
                    id="desc"
                    className="form-control"
                    required
                    value={detalle}
                    onChange={(e) => setDetalle(e.target.value)}
                  ></textarea>
                  <label>Imagen</label>
                  <input
                    id="imagen"
                    className="form-control"
                    type="text"
                    placeholder="Ingrese una url"
                    required
                    src={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                  />
                  <label>Estado</label>
                  <select
                    id="estado"
                    className="form-select"
                    aria-label="default select example"
                    onChange={(e) => setEstadoMenu(e.target.value)}
                  >
                    <option value="">Seleccione</option>
                    <option value= "true">Disponible</option>
                    <option value="false">No disponible</option>
                  </select>
                  <label>Categoria</label>
                  <select
                    id="categoria"
                    className="form-select"
                    aria-label="default select example"
                    onChange={(e) => setCategoria(e.target.value)}
                  >
                    <option value="">Seleccione</option>
                    {categorias.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.categoria}
                      </option>
                    ))}
                  </select>
                  <label>Precio</label>
                  <input
                    id="precio"
                    className="form-control"
                    type="number"
                    required
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                   <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Crear Menú
                </button>
                  </div>
                  {/* <button className="btn btn-primary mt-3 float-end">
                    Guardar
                  </button> */}
                </form>
                {/* {mensaje.length > 0 && (
                  <div className="my-3">
                    {mensaje.map((item, index) => (
                      <div
                        className={
                          item?.param
                            ? "alert alert-danger"
                            : "alert alert-primary"
                        }
                        role="alert"
                        key={index}
                      >
                        {item.msg}
                      </div>
                    ))}
                  </div>
                )} */}
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary">
                  Crear Menú
                </button>
              </div> */}
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
    
  );
};

export default MenuScreen;
