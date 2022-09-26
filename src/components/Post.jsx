import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import swal from "sweetalert";
import { deletePedido, putPedido } from "../helpers/fetchApp";
import {getMenuById} from "../helpers/fetchMenu";
import borradoP from "../asset/borradoP.png";


const Post = ({post, handleChange }) => {
    let envio="";
   
  const {uid, usuario, menu, entrega, nPedido, date, estado } = post;
  

  

  if (entrega){
    envio= "Realizado";

  }
  else{
    envio ="Pendiente";
  }
 const [menus, setMenus] = useState([]);



 
 useEffect(() => {
  let arreglo=[];
    menu.forEach((m)=>{
    getMenuById(m).then((respuesta)=>{
       
       console.log(respuesta);
   
        arreglo.push(respuesta.menu.nombre,", ");
        setMenus([...arreglo]);    
        
         })
         
  })
  
 
},[uid])
  
  const pedidoR=()=>{
    putPedido(uid).then((respuesta)=>{
      console.log(respuesta.msg);
      })
      swal({text: "El ha sido realizado!!",
      icon:"success",
      timer: 2000});
      handleChange();
  }

  const pedidoE=()=>{
    swal({
      title:"Eliminar Pedido",
      text: "¿Esta seguro que quiere eliminar este Pedido?",
      icon: "warning",
      buttons:["No","Si"]

    }).then((respuesta)=>{
 
      if(respuesta){
        deletePedido(uid).then((respuesta)=>{
          console.log(respuesta.msg);
          });
        swal({text: "El Pedido a sido borrado con exito",
        icon:"success",
        timer:2000});
        handleChange();

        /* setTimeout(()=>{
          window.location.href = window.location.href;
        },2000); */
        
      }
    });

  }
 
  return (
    <>
    

    <br></br>
    <div className="container dPedidos ">
         <div className="row  columnas">
           <div className="col-1 d-flex pedidosB">
             <p className="etiqueta">{nPedido}</p>
           </div>
           <div className="col-3 col-md-2 pedidosB">
              <p className="etiqueta">{usuario.nombre}</p>
              
           </div>
           <div className="col-3 col-md-4 pedidosB">
           <p className="etiqueta">{menus}</p>
         

           </div>
          <div className="col-3 col-md-2 pedidosB">
           <p className="etiqueta">{moment(date).format("LT l")}</p>
           </div>
           <div className="col-3 col-md-2 colEntrega pedidosB">
           <p className="etiqueta">{envio}</p>
           <div className="form-check check">
              <input className="form-check-input checkEntrega" type="checkbox" value="" id="flexCheckDefault" checked={entrega} onClick={pedidoR}/>

            </div>
          </div>
          <div className="col-2 col-md-1  pedidosI " title="Eliminar Pedido">
            <lord-icon
              src="https://cdn.lordicon.com/qsloqzpf.json"
              trigger="hover"
              onClick={pedidoE}
            /*   style="width:250px;height:250px" */>
          </lord-icon>  
          
          </div> 
         </div>

    </div>

  
    

       
    
    </>
  );
};

export default Post;
