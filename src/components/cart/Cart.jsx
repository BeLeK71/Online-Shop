import { Box, Button, Typography, Input, Grid } from "@mui/material";
import React, { useEffect } from "react";
import img1 from "./One_Ring_Blender_Render.png";
import img2 from "./Vector.svg";
import img3 from "./Line 01.svg";

const Cart = () => {
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    // getCart();
  };

  return (
    <Box
      sx={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: "DM Sans",
          fontSize: "33px",
          fontWeight: 500,
          lineHeight: "43px",
        }}
      >
        Shopping Cart
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {/* left window start */}
        <Grid item xs={12} md={6}>
          <div id="card" style={{ display: "flex" }}>
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

            <Input
              style={{
                width: "5%",
                height: "8%",
                flexShrink: 0,
                marginLeft: "10%",
                marginTop: "2%",
              }}
              type="number"
            />
            <img
              src={img2}
              alt="x"
              style={{
                display: "flex",
                width: "2%",
                marginLeft: "5%",
                marginTop: "-13%",
              }}
            />
          </div>

          <Button
            id="coupon"
            style={{
              width: "50%",
              height: "53px",
              flexShrink: 0,
              borderRadius: "4px",
              border: "1px solid var(--Light-Colors-Black---Light, #000)",
              background: "var(--Light-Colors-Black---Light, #000)",
              color: "white",
              marginTop: "5%",
            }}
          >
            COUPON
          </Button>
          {/* левое окно finish */}
        </Grid>

        {/* right window start */}
        <Grid item xs={12} md={6}>
          <div id="card-2">
            <Typography
              variant="h5"
              sx={{
                color: "var(--Light-Colors-Black---Light, #000)",
                fontFamily: "DM Sans",
                fontSize: "26px",
                fontWeight: 400,
                lineHeight: "25px",
                marginBottom: "15px",
              }}
            >
              Cart Totals
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <Typography variant="body1">TOTAL</Typography>
              <Typography variant="body1">//Price</Typography>
            </div>
            <Button
              id="checkout"
              style={{
                width: "50%",
                height: "53px",
                flexShrink: 0,
                borderRadius: "4px",
                border: "1px solid var(--Light-Colors-Black---Light, #000)",
                background: "var(--Light-Colors-Black---Light, #000)",
                color: "white",
                marginTop: "5%",
              }}
            >
              CHECKOUT
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
