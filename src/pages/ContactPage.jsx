import React from "react";

const ContactPage = () => {
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

  return (
    <div sx={{ containerStyle }}>
      <h2>Contact Page</h2>
      <div sx={{ headingStyle }}>
        <b>Information:</b>
      </div>
      <p>
        Тел.: 8 (800) 100 19 20 Короткий номер: *1920 (Абонентам: МТС, Билайн,
        Мегафон, TELE2, Тинькофф мобайл) E-mail: client@miuz.ru
      </p>
      <div sx={{ headingStyle }}>
        <b>Description:</b>
      </div>
      <p>
        Специалисты Горячей линии с удовольствием помогут Вам в решении
        вопросов, связанных с приобретением ювелирных изделий MIUZ Diamonds.
      </p>
      <div sx={{ headingStyle }}>
        <b>Working Time:</b>
      </div>
      <p>7:00 - 23:00 (по Лёхинаму времени)</p>
    </div>
  );
};

export default ContactPage;
