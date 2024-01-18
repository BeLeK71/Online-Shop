import React from "react";

import Footer from "./components/homePage/Footer";
import HomePage from "./pages/HomePage";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/homePage/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Lira Earrings",
          img: "Img 01.png",
          // description: "Описание карточки 1",
          price: "20,00",
          category: "earrings",
        },
        {
          id: 2,
          title: "Hal Earrings",
          img: "Img 02.png",
          // description: "Описание карточки 2",
          price: "25,00",
          category: "earrings",
        },
        {
          id: 3,
          title: "Kaede Hair Pin Set Of 3 ",
          img: "Img 03.png",
          // description: "Описание карточки 3",
          price: "30,00",
          category: "hairpins",
        },
        {
          id: 4,
          title: "Hair Pin Set of 3",
          img: "Img 04.png",
          // description: "Описание карточки 4",
          price: "30,00",
          category: "hairpins",
        },
        {
          id: 5,
          title: "Plaine Necklace",
          img: "Img 05.png",
          // description: "Описание карточки 5",
          price: "19,00",
          category: "pendants",
        },
        {
          id: 6,
          title: "Yuki Hair Pin Set of 3",
          img: "Img 06.png",
          // description: "Описание карточки 6",
          price: "29,00",
          category: "hairpins",
        },
      ],
    };

    this.addToOrder = this.addToOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar />
        {/* <MainRoutes /> */}
        <HomePage items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] }, () => {
      console.log(this.state.orders);
    });
  }
}

export default App;
