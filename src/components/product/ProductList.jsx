import { Box } from "@mui/material";
import React, { useState } from "react";
import PaginationControlled from "./Pagination";
import { useProducts } from "../context/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  //! PAGINATION
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const itemPerPage = 3;
  const count = Math.ceil(products.length / itemPerPage);
  console.log(count);
  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  }
  console.log(currentData());
  return (
    <Box>
      <PaginationControlled
        handleChange={handleChange}
        page={page}
        count={count}
      />
    </Box>
  );
};

export default ProductList;
