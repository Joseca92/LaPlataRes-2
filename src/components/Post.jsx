import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { getMenuById } from "../helpers/fetchApp";

const Post = ({ post }) => {
    let envio="";
  const { usuario, menu, entrega, nPedido, date } = post;

  if (entrega){
    envio= "Realizado";
  }
  else{
    envio ="Pendiente";
  }
 const [menus, setMenus] = useState("");

  useEffect(() => {
    let arreglo=[];
    menu.forEach((m)=>{
    getMenuById(m).then((respuesta)=>{
        
       /*  console.log(respuesta.menu.nombre); */
   
        arreglo.push(respuesta.menu.nombre,", ");
        setMenus([...arreglo]);    
        
         })
   });
  console.log(menus);
  }, []);
  
 
  return (
    <>
    


    <div className="container dPedidos  ">
         <div className="row">
           <div className="col-1 d-flex justify-content-center">
             <p>{nPedido}</p>
           </div>
           <div className="col">
              <p>{usuario.nombre}</p>
           </div>
           <div className="col-3 menusP d-flex align-items'-center">
              <div>
                <p>{menus}</p>
              </div>
              <div>
                <p>ver mas</p>
              </div>
           
           </div>
           <div className="col">
           <p>{moment(date).format("LT l")}</p>
           </div>
           <div className="col">
           <p>{envio}</p>
           </div>
         </div>
         

    </div>
       
    
    </>
  );
};

export default Post;
