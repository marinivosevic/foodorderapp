import React, { createContext, useContext, useState, useEffect } from "react";
//import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState();
  const [totalQuantites, settotalQuantites] = useState();
  const [qty, setqty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    if (checkProductInCart) {
      settotalPrice(
        (prevTotalPrice = prevTotalPrice + product.price * quantity)
      );
      settotalQuantites(
        (prevTotalQuantities) => prevTotalQuantities + quantity
      );

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setcartItems(updatedCartItems);
      alert("uspjelo if");
    } else {
      product.quantity = quantity;
      setcartItems([...cartItems, { ...product }]);
      alert("uspjelo else");
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantites,
        qty,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
