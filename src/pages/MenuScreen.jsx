import React, { useState, useEffect } from 'react';
import { getCategoria, postMenu, getMenu, getMenuById } from '../helpers/fetchMenu';
import MenuCard from '../components/menuCard';
import { Link } from 'react-router-dom';
import '../css/menuScreen.css';
import SearchAppMenu from '../components/SearchAppMenu';
import Loading from '../components/Loading'
import { getUsuarioById} from "../helpers/fetchUsuario";



const MenuScreen = () => {
  const [mensaje, setMensaje] = useState([]);
  const [mensajes, setMensajes] = useState('');
  const [nombre, setNombre] = useState('');
  const [estadoMenu, setEstadoMenu] = useState(true);
  const [detalle, setDetalle] = useState('');
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [imagen, setImagen] = useState('');
  const [loading, setLoading] = useState(true);
  const [actualizar, setActualizar] = useState(1);
  
  const [permiso, setPermiso] = useState("");


  //traer los menus
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const id= JSON.parse(localStorage.getItem("user"))
        console.log(id);    
         getUsuarioById(id).then((respuesta)=>{
            console.log(respuesta.usuario.role);
            setPermiso(respuesta.usuario.role);     
          });

    getCategoria().then(respuesta => {
    
      setCategorias(respuesta.categoria);
          });
    getMenu().then(respuesta => {
      /* console.log(respuesta.total); */
      if (respuesta?.msg) {
        setMensajes(respuesta.msg);
      } else {
        setMenus(respuesta.menu);
      }
      
      setLoading(false);
    });
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


  
  
  const handleChange= (e)=>{
    console.log("handleChange")
   /*  let cambio=0; */

    setActualizar(actualizar+5);
  
    console.log(actualizar);
   
  }


  const handleSubmit = e => {
    e.preventDefault();

    const datos = {
      nombre,
      detalle,
      img: imagen,
      estadoMenu,
      categoria,
      precio,
    };

    postMenu(datos).then(respuesta => {
      //console.log(respuesta.errors);
      if (respuesta?.errors) {
        setMensaje(respuesta.errors);
      } else {
        setMensaje([{ msg: '¡Nuevo Menú creado!' }]);
      }
      limpiarCampos();
      setTimeout(() => {
        setMensaje('');
      }, 3000);
    });
  };
  

  const limpiarCampos = () => {
    setNombre('');
    setDetalle('');
    setEstadoMenu(true);
    setCategoria('');
    setPrecio(0);
    setImagen('');
    setTimeout(()=>{
      handleChange();
    /* window.location.href = window.location.href; */
  },4000);
  };

  return (
    <>
      <div className="container boxContainer">
        <div className="row mt-5">
          <div className="col">
            <h1 className='animate__animated animate__fadeInDown'>Administración de Menú</h1>
            <hr />
          </div>
          <SearchAppMenu/>
        </div>
        {/* modalBoton */}
        <div className="row">
          <div className="col-5">
            <button
              type="button"
              className="btn btn-secondary my-3"
              color="dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Nuevo Menú
            </button>
          </div>
        </div>
        <div className="row overflow-auto mb-5 p-3 mt-3 d-flex justify-content-center">
          {loading ? (
            <Loading/>
          ) : mensajes ? (
            <div className="col-12 col-md-6 offset-md-3">
              <div className="alert alert-danger" role="alert">
                {mensajes}
              </div>
              <Link className="btn btn-primary" to="/login">
                Volver
              </Link>
            </div>
          ) : (
            <>
            <div id='contenedorGeneral'>
              <div className="col-12 col-md-8 p-3 ">
                <table>
                  <tbody>
                    {menus.map((menu) => (
                      <tr key={menu._id}>
                        <td>
                          <MenuCard  post={menu} handleChange={handleChange}
                          />
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
              
            </>
          )}
        </div>
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
              <form id="formulario" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                  id="nombre"
                  className="form-control"
                  type="text"
                  required
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
                <label>Descripción</label>
                <textarea
                  id="desc"
                  className="form-control"
                  required
                  value={detalle}
                  onChange={e => setDetalle(e.target.value)}
                ></textarea>
                <label>Imagen</label>
                <input
                  id="imagen"
                  className="form-control"
                  type="text"
                  placeholder="Ingrese una url"
                  
                  value={imagen}
                  onChange={e => setImagen(e.target.value)}
                />
                <label>Estado</label>
                <select
                  id="estado"
                  className="form-select"
                  aria-label="default select example"
                  value={estadoMenu}
                  onChange={e => setEstadoMenu(e.target.value)}
                >
                  <option value="">Seleccione</option>
                  <option value="true">Disponible</option>
                  <option value="false">No disponible</option>
                </select>
                <label>Categoria</label>
                <select
                  id="categoria"
                  className="form-select"
                  aria-label="default select example"
                  onChange={e => setCategoria(e.target.value)}
                  value={categoria}
                >
                  <option value="">Seleccione</option>
                  {categorias.map(category => (
                    <option key={category._id} value={category.categoria}>
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
                  onChange={e => setPrecio(e.target.value)}
                />
                {/* <button className="btn btn-primary mt-3 float-end">
                    Guardar
                  </button> */}
              </form>
              {mensaje.length > 0 && (
                <div className="my-3">
                  {mensaje.map((item, index) => (
                    <div
                      className={
                        item?.param
                          ? 'alert alert-danger'
                          : 'alert alert-primary'
                      }
                      role="alert"
                      key={index}
                    >
                      {item.msg}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                form="formulario"
                className="btn btn-dark"
            
              >
                Crear Menú
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={limpiarCampos}
              >
                Cancelar
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuScreen;
