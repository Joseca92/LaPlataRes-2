import React, { useState, useEffect } from "react";
import {postMenu} from "../helpers/fetchApp";
//import ReactMarkdown from "react-markdown";


const MenuScreen = () => {
  const[mensaje,setMensaje] = useState([])
  const[nombre,setNombre] = useState("")
  const[estadoMenu,setEstadoMenu]=useState([])
  const[estadoMenuSelect,setEstadoMenuSelect]=useState([0])
  const[precio,setPrecio]=useState('')
  const[categoria,setCategoria]=useState([0])
  const[categoriaSelect,setCategoriaSelect]=useState([])
  
  useEffect(()=>{
    setEstadoMenu(['Disponible','No disponible'])
     setEstadoMenuSelect(['Seleccione'])
     setCategoria(['Menú del día','Postre'])
     setCategoriaSelect(['Seleccione'])
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      nombre,
      estadoMenu,
      estadoMenuSelect,
      detalle,
      precio,
      categoria,
      categoriaSelect,
    };

    postMenu(datos).then((respuesta) => {
      console.log(respuesta.errors);
      if (respuesta?.errors) {
        setMensaje(respuesta.errors);
      } else {
        setMensaje([{ msg: "Nuevo Menú creado!" }]);
      }
      setNombre("");
      setEstadoMenu("");
      setEstadoMenuSelect("");
      setdetalle("");
      setPrecio("");
      setCategoria("");
      setCategoriaSelect("");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    });
  };
  
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
              <input id="titulo" className="form-control" type="text" required />
              <label>Descripción</label>
              <textarea id="desc" className="form-control" required></textarea>
              <label>Imagen</label>
              <input
                id="imagen"
                className="form-control"
                type="text"
                placeholder="Ingrese una url"
                required
              />
              <label>Estado</label>
              <select id="estado" className="form-control" required>
                <option selected>Seleccione</option>
                <option defaultValue="Disponible">disponible</option>
                <option defaultValue="No disponible">No disponible</option>
              </select>
              <label>Categoria</label>
              <select id="estado" className="form-control" required>
                <option selected>Seleccione</option>
                <option defaultValue="Categoria 1">Categoria 1</option>
                <option defaultValue="Categoria 2">Categoria 2</option>
                <option defaultValue="Categoria 3">Categoria 3</option>
              </select>
              <label>Precio</label>
              <input
                id="precio"
                className="form-control"
                type="number"
                defaultValue="0"
                required
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
         {/*  <div>
              <p>Preview</p>
              <ReactMarkdown>{body}</ReactMarkdown>
                  </div>*/}
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
/*
export default function RegistrarMenu(){
  const[nombre,setNombre]=useState=('')
  const[estadoMenu,setEstadoMenu]=useState=([])
  const[estadoMenuSelect,setEstadoMenuSelect]=useState=([1])
 const[detalle,setdetalle]=useState=('')
 const[precio,setPrecio]=useState=('')
  const[categoria,setCategoria]=useState=([])
  const[categoriaSelect,setCategoriaSelect]=useState-([])
 
  useEffect(()=>{
   setEstadoMenu(['Disponible','No disponible'])
    setEstadoMenuSelect('Seleccione')
    setCategoria(['Menú del día','Postre'])
    setCategoriaSelect('Seleccione')
 },[])
 
 const guardar= async(e)=>{
    e.preventDefault()
     const usuario={
      nombre,
      estadoMenu:estadoMenuSelect, 
      detalle,
      precio,
      categoria:categoriaSelect,
        }

      if(guardar===''){
        Swal.fire({
          icon:'error',
          title:'debe escribir un nombre',
          showconfirmButton:false,
          timer:1500
        })
      }
      else
      {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.post('/') //falta la ruta
      }
                           }                       I
return(
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-7 mx-auto">
       <div className="card">
        <div className="conteiner text center fa-5x">
          <i className="fas fa-user-plus"></i>
        </div>
        <div className="card-header bg-info text-center">
          <h4>Crear nuevo menú</h4>
        </div>
        <div className="card-body">
          <form onSubmit={"guardar"}>
            <div className="col-md-6">
              <label>Nombre</label>
              <input type="text" className='form-control required' />
            </div>

            <div className="col-md-6">
              <label>Estado</label>
              <input type="text" className='form-control required' />
            </div>

            <div className="col-md-6">
              <label>Detalle</label>
              <input type="text" className='form-control required' />
            </div>

            <div className="col-md-6">
              <label>Precio</label>
              <input type="text" className='form-control required' />
            </div>

            <div className="col-md-6">
              <label>Categoria</label>
              <input type="text" className='form-control required' />
            </div>
            <br />
            <button type="submit" className="btn btn-outline-info">
              <span className="fa fa-save"></span> Crear nuevo menú
            </button>
          </form>
        </div>
       </div>
      </div>
    </div>
  </div>
*/