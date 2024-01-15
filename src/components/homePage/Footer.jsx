import React from "react";
import img1 from "./assets/twitter-svgrepo-com.svg";
import img2 from "./assets/371164.svg";
import img3 from "./assets/iconmonstr-github-1.svg";

const MyStyledDiv = () => {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between", // Adjust this property based on your design needs
    alignItems: "center", // Align items vertically in the center
    width: "100%",
    height: "159px",
    flexShrink: 0,
    alignSelf: "flex-end",
  };

  const h1Style = {
    color: "var(--Light-Colors-Dark-gray---Light, #707070)",
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "27px",
  };
  const imgStyle = {
    width: "156px",
    height: "19px",
    flexShrink: 0,
  };

  return (
    <div style={divStyle}>
      <h1 style={h1Style}>CONTACT</h1>
      <h1 style={h1Style}>TERMS OF SERVICES</h1>
      <h1 style={h1Style}>SHIPPING AND RETURNS</h1>
      <img src={img1} style={imgStyle} />
      <img src={img2} style={imgStyle} />
      <img src={img3} style={imgStyle} />
      <h3>© 2021 Shelly. Terms of use and privacy policy.</h3>
    </div>
  );
};

export default MyStyledDiv;
