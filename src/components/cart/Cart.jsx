import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    // getCart();
  };
  return (
    // <TableContainer>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Picture</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody></TableBody>
    //   </Table>
    //   <Button onClick={cartCleaner}>BYE NOW FOR </Button>
    // </TableContainer>
    <Box
      sx={{
        width: "50vw",
        // height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        id
        variant="h4"
        align="center"
        sx={{
          fontFamily: "DM Sans",
          fontSize: "33px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "43px",
        }}
      >
        Shopping Cart
      </Typography>

      <div>
        <div id="left">
          <div id="card">
            <img
              src="src/components/homePage/assets/One_Ring_Blender_Render.png"
              alt=""
              //style={{ widtwidth: "136px", height: "136px", flexShrink: 0 }}
            />
          </div>
        </div>
        <div id="right"></div>
      </div>
    </Box>
  );
};

export default Cart;
