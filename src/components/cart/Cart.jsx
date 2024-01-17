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
import img1 from "./One_Ring_Blender_Render.png";

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
        // width: "50vw",
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
        <div
          id="left" // дальше надо будет заменить все дефолд значения на значения из баззы
          данных
        >
          <div
            id="card"
            style={{ width: "580px", marginLeft: "5%", display: "flex" }}
          >
            <img
              src={img1}
              alt=""
              style={{ width: "136px", height: "136px", flexShrink: 0 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                marginLeft: "7%",
              }}
            >
              <div style={{ display: "flex" }}>Name</div>
              <div style={{ display: "flex" }}>Category</div>
              <div style={{ display: "flex" }}>Price</div>
            </div>
            {/* Добавления кол-ва <TableCell align="right">
              <input type="number" min={1} max={20} />
            </TableCell> */}
            {/* <TableCell align="right">shit</TableCell> */}
            <input
              style={{
                width: "10%",
                height: "20%",
                flexShrink: 0,
                marginLeft: "8%",
                marginTop: "2%",
              }}
              type="number"
            />
          </div>
        </div>
        <div id="right"></div>
      </div>
    </Box>
  );
};

export default Cart;
