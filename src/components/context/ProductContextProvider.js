import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  categories: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //CREATE
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };

  //READ
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  //DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
  };
};

export default ProductContextProvider;
