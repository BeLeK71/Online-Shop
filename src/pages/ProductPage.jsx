import React from "react";
import ProductsList from "../components/product/ProductList";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "300px", flex: "none" }}></div>
      <ProductsList />
    </div>
  );
};

export default ProductPage;
