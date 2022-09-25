import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cardContext";

const PostHome = ({ post }) => {
  const { _id, precio, nombre, img, detalle } = post;
  const { addItemToCard } = useContext(CartContext);

  return (
   <>
   
      <div className="col-12 cards">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{detalle}</p>
                        <p className="card-text"> $ {precio}</p>
                      </div>
                     {/*  <button
            
                         onClick={handleClick}
                         className="btnGral fw-bold p-2 mx-2">
                          Agregar
                         </button> */}
                      
                    </div>
                    
                    
                  </div>
                </div>
                
                      
    
      </div>
    </>
  );
};

export default PostHome;
