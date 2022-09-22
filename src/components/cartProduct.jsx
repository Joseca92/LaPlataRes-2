import React, { useContext } from "react";
import { CartContext } from "../context/cardContext";
import "../css/cartProduct.css";

 const cartProduct = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { addItemToCard, deleteItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { _id } = item;

  return (
    <div className="cartItem divCart">
      <img className="img" src={item.img} alt={item.nombre} />
      <div className="dataContainer">
        <div className="left">
          <p>{item.nombre}</p>
          <div className="buttons">
            <button className="btn btn-warning" onClick={() => addItemToCard(item)}>
              AGREGAR
            </button>
            <button className="btn btn-warning" onClick={() => deleteItemToCart(item)}>
              SACAR
            </button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.precio}</p>
          
        </div>
       
      </div>
    </div>
  );
};


export default cartProduct