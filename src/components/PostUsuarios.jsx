import React, { useEffect, useState } from "react";
import { deleteUsuario, putUsuarios , getRoles} from "../helpers/fetchUsuario";

import borradoP from "../asset/borradoP.png";
import editarU from "../asset/edit1.png";
import swal from "sweetalert";
import {Button, Modal , ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from "reactstrap";




const Post = ({post, handleChange }) => {
   

  const {uid, nombre, email, role, estado } = post;
  let activo="Usuario Activo";
  
  const [usuAct, setusuAct] = useState(true);
  


  const usuarioE=()=>{
    swal({
      title:"Eliminar usuario",
      text: "¿Esta seguro que quiere eliminar al usuario?",
      icon: "warning",
      buttons:["No","Si"]

    }).then((respuesta)=>{
      console.log(respuesta);
      if(respuesta){
        deleteUsuario(uid).then((respuesta)=>{
          console.log(respuesta.msg);
          });
        swal({text: "El Usuario a sido borrado con exito",
        icon:"success"})
        handleChange();
      }
    });

 
  }

  const [state, setState] = useState({abierto: false});
  const [fRole, setFRole] = useState(role);
  const [fEstado, setFEstado] = useState(estado);
  const [fNombre, setFNombre] = useState(nombre);
 
  const [rolesA, setRoles] = useState([]);


  const modificarU=()=>{
    setState({abierto: !state.abierto}); 
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      nombre: fNombre,
      role: fRole,
      estado: fEstado,
    };
    if (datos.nombre == ""){
      swal({text: "El nombre no debe estar vacio",
        icon:"error"})
    }else{   
      swal({
        title:"Modificar usuario",
        text: "¿Esta seguro que quiere modificar al usuario?",
        icon: "warning",
        buttons:["No","Si"]
  
      }).then((respuesta)=>{
        console.log(respuesta);
        if(respuesta){
          putUsuarios(datos, uid).then((respuesta) => {
            console.log(respuesta.errors);
            console.log(datos); 
          /*   setFNombre(nombre); */
          });
          swal({
          text: "El Usuario a sido modificado con exito",
          icon:"success",
          timer: 3000});
          modificarU();
          handleChange();
          /* setTimeout(()=>{
          window.location.href = window.location.href;
        },3000); */
        }
        if(respuesta== null){
          modificarU();
          
        }
       
        
        
      });




      
  }
  };
     
  useEffect(() => {
    getRoles().then((respuesta) => {
      console.log(respuesta.roles);
      setRoles(respuesta.roles);
    });
  }, []);
  


 
  return (
    <>
    

    <br></br>
    <div className="container dPedidos " id="contenedorPost">
         <div className="row columnas">
           <div className="col-3 d-flex pedidosB">
             <p>{nombre}</p>
           </div>
           <div className="col-3 pedidosB">
              <p>{email}</p>
           </div>
           <div className="col-2 pedidosB">
           <p>{role}</p>
        
           </div>

           <div className="col-2 colEntrega pedidosB " id="divEstado">
           <p>{activo}</p>
           
           
          </div>
          <div className="col-1 editar " title="Modificar Usuario">
{/*           <img src={editarU} alt="Modificar Usuario" onClick={modificarU} />
 */}          <lord-icon
              src="https://cdn.lordicon.com/btnwcdpq.json"
              trigger="hover"
              onClick={modificarU}>
          </lord-icon>
        
           </div>
          <div className="col-1 pedidosI " title="Eliminar Usuario">
          {/* <img src={borradoP} alt="Eliminar Usuario" onClick={usuarioE}/> */}
          <lord-icon
              src="https://cdn.lordicon.com/qsloqzpf.json"
              trigger="hover"
              onClick={usuarioE}
            /*   style="width:250px;height:250px" */>
          </lord-icon>
        
           </div>
         </div>

    </div>
    <Modal isOpen={state.abierto}>
        <ModalHeader>
          Modificar Datos
        </ModalHeader>

        <ModalBody>


        
           <div className="container">
            <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="col">
               <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input type="text" id="nombre" value={fNombre} onChange={(e) => setFNombre(e.target.value)}/> 
              </FormGroup>
            
              </div>
              <div className="col">
                <FormGroup>
                  <Label for="rol">Rol</Label>
                    <select
                    id="roles"
                    className="form-select"
                    aria-label="default select example"
                    value={fRole}
                    onChange={(e) => setFRole(e.target.value)}
                  >
                    <option value="">Seleccione</option>
                    {rolesA.map((roles) => (
                      <option key={roles._id} value={roles.role}>
                        {roles.role}
                      </option>
                    ))}
                  </select>
                  
                </FormGroup>
                <FormGroup>
                  <Label for="estado">Estado</Label>                
                 <select class="form-select" aria-label="Default select example" value={fEstado} onChange={(e) => setFEstado(e.target.value)}>
                    <option value="true">Activo</option>
                    <option value="false">Cancelado</option>
                  </select>  
                  <ModalFooter>
                   <Button color="dark">Modificar</Button>
                    <Button color="secondary" onClick={modificarU}>Cerrar</Button>
                  </ModalFooter>
                </FormGroup>
              </div>
              </form>
            </div>
          </div>
          
          
        </ModalBody> 

        
      </Modal>
 

    

       
    
    </>
  );
};

export default Post;
