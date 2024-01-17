import React from "react";

const AboutPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    width: "60%",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "left",
    marginBottom: "8px",
  };

  const imgStyle = {
    maxWidth: "70%",
    borderRadius: "2px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About</h2>
      <p>Who we are and why we do what we do!</p>
      <p>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
      </p>

      <h3 style={headingStyle}>Top trends</h3>
      <img style={imgStyle} src="" alt="aboutImageOne" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </p>

      <h3 style={headingStyle}>Produced with care</h3>
      <img style={imgStyle} src="" alt="aboutImageTwo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendum.
      </p>
    </div>
  );
};

export default AboutPage;
