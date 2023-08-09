import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
//import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalQuantites, setTotalQuantites] = useState(0);
  const [qty, setqty] = useState(1);
  let foundProduct;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    settotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.Price * quantity
    );
    setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
      toast.success(`${product.Name} Successfully added to cart`);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
      toast.success(`${product.Name} Successfully added to cart`);
    }
  };

  const onRemove = (product) =>{
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    
    settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.Price * foundProduct.quantity);
    setTotalQuantites(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
}
  return (
    <Context.Provider
      value={{
        showCart,
        setshowCart,
        cartItems,
        totalPrice,
        totalQuantites,
        qty,
        onRemove,
        onAdd,

        setCartItems,
        settotalPrice,
        setTotalQuantites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
