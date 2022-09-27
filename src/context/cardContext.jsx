import { createContext, useEffect, useState } from "react";

/* Context creado */
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* estado para el carrito */
  const [cartItems, setCartItems] = useState(()=>{
    try {
      const productoEnLoscalS = localStorage.getItem("product");
      return productoEnLoscalS ? JSON.parse(productoEnLoscalS) : [];
    } catch (error) {
      return[];
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartItems));
    console.log(cartItems)
  }, [cartItems]);

  /*Agregar productos al carrito*/
  const addItemToCard = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart._id === product._id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart._id === product._id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  }

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.precio,
    0

    
  );


  /*Eliminar productos del carrito*/
    const deleteItemToCart = (product) => {
      const inCart = cartItems.find(
        (productInCart) => productInCart._id === product._id
      );
      if (inCart.amount === 1) {
        setCartItems(
          cartItems.filter((productInCart) => productInCart._id !== product._id)
        );
      } else {
        setCartItems(
          cartItems.map((productInCart) => {
          if (productInCart._id === product._id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
        );
      }
    };

    
   


    return(
        <CartContext.Provider value={{cartItems, addItemToCard, deleteItemToCart }}>
            {children}
        </CartContext.Provider>
    )
};
