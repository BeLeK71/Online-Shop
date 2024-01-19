import React from "react";
import ProductsList from "../components/product/ProductsList";
import SideBar from "../components/product/SideBar";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", marginTop: "4%" }}>
      <div style={{ width: "20%", flex: "none" }}>
        <SideBar />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "-4%",
          marginLeft: "5%",
        }}
      >
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductPage;
