import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CartContext } from "../context/cardContext";

const Cart = () => {
  const [productsLenght, setproductsLenght] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    setproductsLenght(
      cartItems.reduce((previus, current) => previus + current.amount, 0)
    );
    const total = cartItems.reduce(
      (previus, current) => previus + current.amount * current.price,
      0
    );
  }, [cartItems]);
  return (
    <div>
      <lord-icon
        src="https://cdn.lordicon.com/gtcqrwnh.json"
        trigger="hover"
        colors="primary:#ffffff"
        
      ></lord-icon>
    </div>
  );
};

export default Cart;
