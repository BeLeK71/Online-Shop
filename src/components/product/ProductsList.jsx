import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import PaginationControlled from "./Pagination";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  // //! Search
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  //! можно взять для search navbar
  //! PAGINATION
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const itemPerPage = 9;
  const count = Math.ceil(products.length / itemPerPage);
  console.log(count);
  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  }
  console.log(currentData());
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        mt: "25px",
      }}
    >
      {currentData().map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}
      <PaginationControlled
        handleChange={handleChange}
        page={page}
        count={count}
      />
    </Box>
  );
};

export default ProductList;
