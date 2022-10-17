import React, { useEffect, useState } from "react";
import { getUsuarioById} from "../helpers/fetchUsuario";

export const AdminScreen = () => {
    const [permiso, setPermiso] = useState("");
  

    useEffect(() => {
        const usuario= JSON.parse(localStorage.getItem("user"))
           
         getUsuarioById(usuario.uid).then((respuesta)=>{
            console.log(respuesta.usuario.role);
            setPermiso(respuesta.usuario.role);     
          }) 
    }, [])

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
     

  return (
    <div>Adminiscracion</div>
  )
}
