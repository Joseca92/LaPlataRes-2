import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { getMenuById, putPedido } from "../helpers/fetchApp";


const Post = ({post }) => {
    let envio="";
   
  const {uid, usuario, menu, entrega, nPedido, date, estado } = post;
  

  if (entrega){
    envio= "Realizado";

  }
  else{
    envio ="Pendiente";
  }
 const [menus, setMenus] = useState([]);
 /* const ocultarB= document.getElementsByClassName(".ocultarB") */
  

 
 useEffect(() => {
  let arreglo=[];
    menu.forEach((m)=>{
    getMenuById(m).then((respuesta)=>{
        
       /*  console.log(respuesta.menu.nombre); */
   
        arreglo.push(respuesta.menu.nombre,", ");
        setMenus([...arreglo]);    
        
         })
  })

},[])
  
  const pedidoR=()=>{
    putPedido(uid).then((respuesta)=>{
      console.log(respuesta.msg);
      }) 
    
  
  }

   
 

     

  


 
  return (
    <>
    


    <div className="container dPedidos ">
         <div className="row columnas">
           <div className="col-1 d-flex ">
             <p>{nPedido}</p>
           </div>
           <div className="col">
              <p>{usuario.nombre}</p>
           </div>
           <div className="col-2">
           
           {/* <button type="button" className="btn btn-success" id="show-element" onClick={mostrarM} >+Menus</button>
           <button type="button" className="btn btn-danger ocultarB"  onClick={mostrarM} >-Menus</button> */}
         

           </div>
           <div className="col">
           <p>{moment(date).format("LT l")}</p>
           </div>
           <div className="col colEntrega">
           <p>{envio}</p>
           <div className="form-check check">
              <input className="form-check-input checkEntrega " type="checkbox" value="" id="flexCheckDefault" checked={entrega} onClick={pedidoR}/>

            </div>
          </div>
         </div>

    </div>

  
  
    

       
    
    </>
  );
};

export default Post;
