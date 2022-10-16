import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cardContext";
import "../css/menuCard.css"


const PostHome = ({ post }) => {
  const { _id, precio, nombre, img, detalle } = post;
  const { addItemToCard } = useContext(CartContext);

  return (
   
    <div className="card text-white bg-black sombra mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={img} className=" rounded-start imgd" alt="..." />
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
    </div>
  </div>
  );
};

export default PostHome;
