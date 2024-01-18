import React, { Component } from "react";
import Item from "./Item.js";

class Items extends Component {
  render() {
    return (
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "50px",
            marginTop: "60px",
          }}
        >
          <span
            style={{
              color: "var(--Light-Colors-Black---Light, #000)",
              fontFamily: "DM Sans",
              fontSize: "33px",
              fontStyle: "normal",
              fontWeight: 500,
              display: "block",
            }}
          >
            Shop The Latest
          </span>
          <button className="viewBtn">View All</button>
        </div>

        <div className="carts"></div>
      </main>
    );
  }
}

export default Items;
