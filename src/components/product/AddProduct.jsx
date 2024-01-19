import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADD PRODUCT TO SITE 💍
      </Typography>
      <TextField
        onChange={handleInput}
        name="title"
        label="Title"
        variant="outlined"
        sx={{
          backgroundColor: "rgb(255, 225, 170)",
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
          },
        }}
      />
      <TextField
        onChange={handleInput}
        name="description"
        label="Description"
        variant="outlined"
        sx={{
          backgroundColor: "rgb(255, 225, 170)",
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
          },
        }}
      />
      <TextField
        onChange={handleInput}
        name="price"
        label="number"
        variant="outlined"
        sx={{
          backgroundColor: "rgb(255, 225, 170)",
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
          },
        }}
      />
      <TextField
        onChange={handleInput}
        name="image"
        label="Image URL"
        variant="outlined"
        sx={{
          backgroundColor: "rgb(255, 225, 170)",
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
          },
        }}
      />
      <CategorySelect
        handleInput={handleInput}
        sx={{ backgroundColor: "rgb(255, 225, 170)" }}
      />
      <Button
        fullWidth
        variant="outlined"
        onClick={() => addProduct(product)}
        sx={{
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
          },
          backgroundColor: "rgb(255, 225, 170)",
        }}
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
