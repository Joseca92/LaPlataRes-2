import { createContext, useEffect, useState } from "react";

/* Creamos el context, se le puede pasar un valor inicial */
export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  try {
    const productoEnLoscalS = localStorage.getItem("product");
    return productoEnLoscalS ? JSON.parse(productoEnLoscalS) : [];
  } catch (error) {
    console.log(error);
  }
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartItems));
    console.log(cardItems)
  }, [CartProvider]);
  const addItemToCard = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }

    const deleteItemToCart = (product) => {
      const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
      );
      if (inCart.amount === 1) {
        setCartItems(
          cartItems.filter((productInCart) => productInCart.id !== product.id)
        );
      } else {
        setCartItems((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        });
      }
    };
    return(
        <CartContext.Provider value={{cardItems, addItemToCard, deleteItemToCart }}>
            {children}
        </CartContext.Provider>
    )
  };
};
