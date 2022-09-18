import { createContext, useEffect, useState } from "react";

/* Creamos el context, se le puede pasar un valor inicial */
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState(()=>{
    try {
      const productoEnLoscalS = localStorage.getItem("product");
      return productoEnLoscalS ? JSON.parse(productoEnLoscalS) : [];
    } catch (error) {
      return[];
    }
  });

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartItems));
    console.log(cartItems)
  }, [cartItems]);
  /*Agregamos producto al carrito*/
  const addItemToCard = (product) => {
    
    const inCart = cartItems.find(
      (productInCart) => productInCart._id === product._id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product._id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  }
  /*Eliminamos producto del carrito*/
    const deleteItemToCart = (product) => {
      const inCart = cartItems.find(
        (productInCart) => productInCart._id === product._id
      );
      if (inCart.amount === 1) {
        setCartItems(
          cartItems.filter((productInCart) => productInCart._id !== product._id)
        );
      } else {
        setCartItems((productInCart) => {
          if (productInCart._id === product._id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        });
      }
    };
    return(
        <CartContext.Provider value={{cartItems, addItemToCard, deleteItemToCart }}>
            {children}
        </CartContext.Provider>
    )
};
