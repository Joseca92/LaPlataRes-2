import React, { useState, useEffect } from "react";
import {getCategoria, postMenu} from "../helpers/fetchApp";

const MenuScreen = () => {
  const[mensaje,setMensaje] = useState([])
  const[nombre,setNombre] = useState("")
  const[estadoMenu,setEstadoMenu]=useState(true)
  const[detalle,setDetalle] = useState("")
  const[precio,setPrecio]=useState(0)
  const[categoria,setCategoria]=useState([])
 // const[categorias,setCategorias]=useState([])
  const[imagen,setImagen]=useState('')
   
  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      nombre,
      imagen,
      estadoMenu,
      detalle,
      precio,
      categoria,
    };

    postMenu(datos).then((respuesta) => {
      console.log(respuesta.errors);
      if (respuesta?.errors) {
        setMensaje(respuesta.errors);
      } else {
        setMensaje([{ msg: "¡Nuevo Menú creado!" }]);
      }
      setNombre("");
      setdetalle("");
      setEstadoMenu(true);
      setPrecio(0);
      setCategoria("");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    });
  };
  useEffect(()=>{
    getCategoria().then((respuesta)=>{
      console.log(respuesta);
      setCategoria(respuesta.categoria);
    })
    
  },[])
 

  return(
<>

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h1>Administración de Menú</h1>
            <hr />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6 offset-md-3 form_curso">
            <h3>Crear nuevo menú</h3>
            <form id="formulario" onSubmit={handleSubmit}>
              <label>Nombre</label>
              <input id="titulo" className="form-control" type="text" required
              defaultValue={nombre}
              onChange={(e) => setNombre(e.target.value)}             
              />
              <label>Descripción</label>
              <textarea id="desc" className="form-control" required
              defaultValue={detalle}
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
              <select id="estado" className="form-control" required
               defaultValue={estadoMenu}
               onChange={(e) => setEstadoMenu(e.target.value)}
              >
               {/*  {<option selected>Seleccione</option>} */}
                <option defaultValue= "true">disponible</option>
                <option defaultValue="false">No disponible</option>
              </select>
              <label>Categoria</label>
              <select id="estado" className="form-control" required
              defaultValue={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              >
               <option selected defaultValue= {0}>Seleccione</option>
                
                {
                  categoria.map((c)=>{
                    <option defaultValue={c.categoria}>{c.categoria}</option>

                  })

                }
          
              
              </select>
              <label>Precio</label>
              <input
                id="precio"
                className="form-control"
                type="number"
               
                required
                defaultValue={precio}
              onChange={(e) => setPrecio(e.target.value)}
              />
              <button className="btn btn-primary mt-3 float-end">Guardar</button>
            </form>
            {mensaje.length > 0 && (
              <div className="my-3">
                {mensaje.map((item, index) => (
                  <div
                    className={
                      item?.param ? "alert alert-danger" : "alert alert-primary"
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
        </div>
      
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="table_body">
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </>
  )
}

export default MenuScreen