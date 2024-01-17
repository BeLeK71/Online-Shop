import React, { createContext, useContext, useReducer } from "react";
export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const CartContextProvider = () => {
  return <div>CartContextProvider</div>;
};

export default CartContextProvider;
