import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { useCart } from "../context/CartContextProvider";
import { AddShoppingCart } from "@mui/icons-material";
import Detail from "./Detail";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const ProductCard = ({ elem }) => {
  //! хз нужен ли он const navigate = useNavigate()
  const { deleteProduct } = useProducts();
  const { addProductToCart } = useCart();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      sx={{
        width: { md: "30vw", lg: "19vw" },
        //height: 850,
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        marginTop: "5%",
        marginLeft: "3%",
      }}
    >
      {/* IMAGE   ------- здесь пожно сделать окно с details */}
      <CardActionArea onClick={handleOpen}>
        <CardMedia sx={{ height: 240, borderRadius: 4 }} image={elem.image} />{" "}
      </CardActionArea>
      <CardContent sx={{ padding: "20px 5px 0px 5px" }}>
        <Typography
          fontSize="20"
          fontWeight={400}
          variant="h5"
          component="div"
          fontStyle={"normal"}
          fontFamily={"DM Sans"}
        >
          {elem.title}
          {/* TITLE */}
        </Typography>
        <Typography
          color="#A18A68"
          fontSize="20px"
          fontStyle={"normal"}
          fontWeight={500}
          textTransform={"capitalize"}
        >
          {elem.price}
          {/* PRICE */}
        </Typography>
        <Stack spacing={1} margin="10% 0">
          <Rating name="haf-rating" defaultValue={0} precision={1} />
        </Stack>
        {/* <Typography color="black" fontSize="18px" fontWeight={300}>
          {elem.description}
        </Typography> */}
        {/* DESCRIPTION */}
        <Button
          onClick={() => deleteProduct(elem.id)}
          size="medium"
          variant="outlined"
          color="secondary"
        >
          Delete
        </Button>
        {/* DELETE */}
        <Button
          //onClick={() => navigate(`/edit/${elem.id}`)}
          size="medium"
          variant="outlined"
          color="primary"
        >
          Edit
        </Button>
        {/* EDIT */}
        <IconButton onClick={() => addProductToCart(elem)}>
          <AddShoppingCart />
        </IconButton>
        {/*  add Product to Cart */}
      </CardContent>
      <Detail open={open} handleClose={handleClose} elem={elem} />
      {/* DETAILS */}
    </Card>
  );
};

export default ProductCard;
