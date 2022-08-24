import React,{useEffect,usestate}from'react'
import React from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'

const MenuScreen = () => {
return(
<>

      <div class="container">
        <div class="row mt-5">
          <div class="col">
            <h1>Administración de Menú</h1>
            <hr />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-md-6 offset-md-3 form_curso">
            <h3>Crear nuevo menú</h3>
            <form id="formulario">
              <label>Nombre</label>
              <input id="titulo" class="form-control" type="text" required />
              <label>Descripción</label>
              <textarea id="desc" class="form-control" required></textarea>
              <label>Imagen</label>
              <input
                id="imagen"
                class="form-control"
                type="text"
                placeholder="Ingrese una url"
                required
              />
              <label>Estado</label>
              <select id="estado" class="form-control" required>
                <option selected>Seleccione</option>
                <option value="Disponible">disponible</option>
                <option value="No disponible">No disponible</option>
              </select>
              <label>Categoria</label>
              <select id="estado" class="form-control" required>
                <option selected>Seleccione</option>
                <option value="Categoria 1">Categoria 1</option>
                <option value="Categoria 2">Categoria 2</option>
                <option value="Categoria 3">Categoria 3</option>
              </select>
              <label>Precio</label>
              <input
                id="precio"
                class="form-control"
                type="number"
                value="0"
                required
              />
              <button class="btn btn-primary mt-3 float-end">Guardar</button>
            </form>
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
            <button type="submit" class="btn btn-outline-info">
              <span class="fa fa-save"></span> Crear nuevo menú
            </button>
          </form>
        </div>
       </div>
      </div>
    </div>
  </div>
*/