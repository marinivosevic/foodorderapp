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
  let index;

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

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    settotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.Price * foundProduct.quantity
    );
    setTotalQuantites(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQty = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems.filter((item) => item.id !== id);
  
    const productPrice = parseFloat(foundProduct.Price); // Parse the price as a float
  
    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      settotalPrice((prevTotalPrice) => parseFloat((prevTotalPrice + productPrice).toFixed(2))); // Round to 2 decimal places
      setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        settotalPrice((prevTotalPrice) => parseFloat((prevTotalPrice - productPrice).toFixed(2))); // Round to 2 decimal places
        setTotalQuantites((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };
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
        toggleCartItemQty,
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
