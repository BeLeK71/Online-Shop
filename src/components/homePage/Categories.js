import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "earrings",
          name: "Earrings",
        },
        {
          key: "hairpins",
          name: "Hairpins",
        },
        {
          key: "pendants",
          name: "Pendants",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key}>{el.name}</div>
        ))}
      </div>
    );
  }
}

export default Categories;
