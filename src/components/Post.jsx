// <<<<<<< HEAD
// import React from "react";
// import { Link } from "react-router-dom";
// import moment from "moment";

// const Post = ({ post }) => {
//   const { author, title, date, _id } = post;
//   return (
//     <div className="card mt-4">
//       <div className="card-header">
//         <h5>{title}</h5>
//       </div>
//       <div className="card-body d-flex justify-content-between align-items-center">
//         <span className="card-title text-secondary">
//           {author.nombre} - {moment(date).format("LLL")}
//         </span>
//         <Link className="btn btn-primary" to={`/post/${_id}`}>
//           Ver más
//         </Link>
//         {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
//       </div>
//     </div>
// =======
import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import moment from "moment";
import { getMenuById, putPedido } from "../helpers/fetchApp";

const Post = ({ post }) => {
    let envio="";
   
  const {uid, usuario, menu, entrega, nPedido, date, estado } = post;
  let check= document.querySelectorAll('checkEntrega');
  if (entrega){
    envio= "Realizado";
    check.checked= true;
  }
  else{
    envio ="Pendiente";
    check.checked= false;
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
  
  const [realizado, setRealizado] = useState(false);
  const pedidoR=()=>{
    
      /* if(entrega){
        check.checked= false;
        console.log(check.checked);
        putPedido(uid).then((respuesta)=>{
        console.log(respuesta.msg);
        }) 
      }else{
        console.log("es falsp");
        
      } */

      

     

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
            
           <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#verMenus" >Ver menus</button>
        
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

  
    
    
    <div className="modal fade" id="verMenus"  aria-labelledby="verMenusLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="verMenusLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {menus}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    

       
    
    </>
// >>>>>>> b0c33c24c3a4331cbb20c37a23c914fe115403f9
  );
};

export default Post;
