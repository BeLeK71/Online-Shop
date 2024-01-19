import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../context/CartContextProvider";

const Detail = (props) => {
  const { addProductToCart, checkProductInCart } = useCart();
  const style = {
    position: "absolute",
    top: "20%",
    left: "26%",
    width: 700,
    display: "flex",
    flexDirection: "row",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    padding: "20px",
  };
  const imageStyle = {
    marginBottom: "20px",
  };
  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: "20px",
  };
  const { elem, open, handleClose } = props;
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <div style={imageStyle}>
          <img width={300} src={elem.image} alt={elem.title} />
        </div>
        <div style={textContainerStyle}>
          <Typography variant="h4" gutterBottom>
            {elem.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {elem.description}
          </Typography>
          <Typography variant="subtitle1" color="primary" paragraph>
            {elem.category}
          </Typography>
          <Typography variant="subtitle1" color="primary" paragraph>
            {elem.price}
          </Typography>
          <div style={{ marginLeft: "auto", marginTop: "auto" }}>
            {checkProductInCart(elem.id) ? (
              <Button variant="contained" disabled>
                Already in Cart
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => addProductToCart(elem)}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;
