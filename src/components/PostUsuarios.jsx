import React, { useEffect, useState } from "react";
import { deleteUsuario } from "../helpers/fetchApp";
import borradoP from "../asset/borradoP.png";


const Post = ({post }) => {
   
  const {uid, nombre, email, role, estado } = post;
  let activo="Usuario Activo";


  const usuarioE=()=>{
    deleteUsuario(uid).then((respuesta)=>{
      console.log(respuesta.msg);
    })
  }
 

     

  


 
  return (
    <>
    

    <br></br>
    <div className="container dPedidos ">
         <div className="row columnas">
           <div className="col-3 d-flex pedidosB">
             <p>{nombre}</p>
           </div>
           <div className="col-3 pedidosB">
              <p>{email}</p>
           </div>
           <div className="col-3 pedidosB">
           <p>{role}</p>
        
           </div>

           <div className="col-3 colEntrega pedidosB" id="divEstado">
           <p>{activo}</p>
           <img src={borradoP} alt="estado visual false" onClick={usuarioE}/>
          </div>
         </div>

    </div>
  
    

       
    
    </>
  );
};

export default Post;
