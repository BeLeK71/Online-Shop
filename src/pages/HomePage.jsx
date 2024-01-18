import React from "react";
import Items from "../components/homePage/Items";

const HomePage = (props) => {
  return (
    <div>
      <div className="presentation"></div>

      <div>
        <Items items={props.items} />
      </div>
    </div>
  );
};

export default HomePage;
