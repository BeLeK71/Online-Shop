import React from "react";
import img1 from "./assets/twitter-svgrepo-com.svg";
import img2 from "./assets/371164.svg";
import img3 from "./assets/iconmonstr-github-1.svg";
import img4 from "./assets/Line 14.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const MyStyledDiv = () => {
  return (
    <div id="main_div">
      <img src={img4} alt="Line" id="img_line" />
      <div id="div_2">
        <h1>
          <Link to={"/contacts"} id="h1">
            CONTACT
          </Link>
        </h1>
        <h1>
          <a href="#terms" id="h1">
            TERMS OF SERVICES
          </a>
        </h1>
        <h1>
          <a href="#shipping" id="h1">
            SHIPPING AND RETURNS
          </a>
        </h1>
      </div>
      <div id="social_media">
        <a
          href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
        >
          <img src={img1} alt="Описание изображения 1" id="img_id" />
        </a>

        <a href="https://www.instagram.com/adeliya.gold/" target="_blank">
          <img src={img2} alt="Описание изображения 2" id="img_id" />
        </a>

        <a href="https://github.com/BeLeK71/Online-Shop" target="_blank">
          <img src={img3} alt="Описание изображения 3" id="img_id" />
        </a>
      </div>

      <h3 id="h3">© 2021 Shelly. Terms of use and privacy policy.</h3>
    </div>
  );
};

export default MyStyledDiv;
