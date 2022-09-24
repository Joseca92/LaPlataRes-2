import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cardContext";

const PostHome = ({ post }) => {
  const { _id, precio, nombre, img, detalle } = post;
  const { addItemToCard } = useContext(CartContext);

  return (
<<<<<<< HEAD
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
                
                      
    
=======
    <div className="card text-white bg-black sombra mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{detalle}</p>
            <h5 className="card-title">$ {precio}</h5>
            <p className="card-text mt-3">
              <button
                key={_id}
                onClick={() => addItemToCard(post)}
                className="btnGral fw-bold p-2 mx-2"
              >
                Agregar
              </button>
            </p>
          </div>
        </div>
>>>>>>> 8d389ab9d6b0226dffeec38b5bafb4726596d467
      </div>
    </div>
  );
};

export default PostHome;
