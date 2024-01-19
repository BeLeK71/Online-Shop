import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCart } from "../context/CartContextProvider";
import { useEffect } from "react";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProductFromCart } =
    useCart();
  console.log(cart);
  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "20px auto",
        padding: "16px",
        backgroundColor: "#FFD700", // Yellow Gold
        borderRadius: "10px",
      }}
    >
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Picture</TableCell>
              <TableCell sx={{ color: "white" }}>Title</TableCell>
              <TableCell sx={{ color: "white" }}>Category</TableCell>
              <TableCell sx={{ color: "white" }}>Price</TableCell>
              <TableCell sx={{ color: "white" }}>Count</TableCell>
              <TableCell sx={{ color: "white" }}>SubPrice</TableCell>
              <TableCell sx={{ color: "white" }}>-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products &&
              Array.isArray(cart.products) &&
              cart.products.map((elem) => (
                <TableRow key={elem.item.id}>
                  <TableCell>
                    <img
                      width={"70"}
                      src={elem.item.image}
                      alt=""
                      style={{ borderRadius: "5px" }}
                    />
                  </TableCell>
                  <TableCell>{elem.item.title}</TableCell>
                  <TableCell>{elem.item.category}</TableCell>
                  <TableCell>{elem.item.price}</TableCell>
                  <TableCell>
                    <input
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                      type="number"
                      min={1}
                      max={99}
                      value={elem.count}
                    />
                  </TableCell>
                  <TableCell>{elem.subPrice}</TableCell>
                  <TableCell>
                    <Button onClick={() => deleteProductFromCart(elem.item.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={cartCleaner}
        style={{
          backgroundColor: "white",
          color: "#FFD700", // Yellow Gold
          marginTop: "16px",
          borderRadius: "5px",
        }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
