import { Button } from "@mui/material";
import React from "react";
const NotFoundPage = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    width: "60%",
    margin: "0 auto",
  };

  return (
    <div sx={style}>
      <h2 sx={{ fontSize: "33px", mt: 0 }}>404 ERROR</h2>
      <p sx={{ fontSize: "20px", mt: 1 }}>
        This page not found; back to home and start again
      </p>
      <Button sx={{ width: "187px", height: "53px", mt: 2 }}>HOMEPAGE</Button>
    </div>
  );
};

export default NotFoundPage;
