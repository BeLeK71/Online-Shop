import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
const style = {
  position: "absolute",
  top: "30%",
  left: "38%",
  width: 400,
  boxShadow: 24,
  border: "2px solid black",
  bgcolor: "background.paper",
};
const AddCategoryModal = (props) => {
  const { createCategory } = useProducts();
  const { open, handleClose } = props;
  const [category, setCategory] = useState();
  const handleAdd = () => {
    const newCategory = { name: category };
    createCategory(newCategory);
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">Add new category</Typography>
          <TextField
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
          <Button onClick={handleAdd}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
