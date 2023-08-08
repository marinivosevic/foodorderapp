import React, { createContext, useContext, useState, useEffect } from "react";
//import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState();
  const [totalQuantites, setTotalQuantites] = useState();
  const [qty, setqty] = useState(1);

  const onAdd =  (product,quantity) =>{
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    
    settotalPrice((prevTotalPrice) => prevTotalPrice + product.price *quantity );
    setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart){
        

        const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct.id === product.id) return{
                ...cartProduct,
                quantity:cartProduct.quantity + quantity
            }
        })

        setCartItems(updatedCartItems);
        console.log(cartItems);
    }else{
        product.quantity = quantity;
        setCartItems([...cartItems,{...product}]);
        console.log(cartItems);
    }
    
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
            
            onAdd,
            
            
            setCartItems,
            settotalPrice,
            setTotalQuantites
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
