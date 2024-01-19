import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Divider, Grid, Tooltip } from "@mui/material";
import { useAuth } from "../context/AuthContextProvider";
import { useCart } from "../context/CartContextProvider";
import { Button, styled } from "@mui/material";

import { ADMIN } from "../../helpers/const";
import img2 from "./assets/erlan.jpg";

const pages = [
  { id: 1, title: "Shop", link: "/products" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Contacts", link: "/contacts" },
];

function Navbar() {
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { getProductsCountInCart, addProductToCart } = useCart();
  const [badgeCount, setBadgeCount] = React.useState(0);

  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const StyledButton = styled(Button)({
    margin: "8px",
    color: "black",
    display: "block",
    textDecoration: "none",
    fontSize: "18px",
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: { xs: "none", sm: "block" },
              marginLeft: "3%",
              color: "black",
              fontSize: "30px",
              "& .gold-letter": {
                color: "#C6A969",
              },
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <span className="gold-letter">S</span>
              HOPPE
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.id} to={page.link}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
              {email === ADMIN ? (
                <Link to={"/admin"}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">ADMIN</Typography>
                  </MenuItem>
                </Link>
              ) : null}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.id} to={page.link}>
                <StyledButton onClick={handleCloseNavMenu}>
                  {page.title}
                </StyledButton>
              </Link>
            ))}
            {email === ADMIN ? (
              <Link to={"/admin"}>
                <StyledButton onClick={handleCloseNavMenu}>ADMIN</StyledButton>
              </Link>
            ) : null}
          </Box>

          <Typography sx={{ color: "black" }}>
            {email ? `Hello, ${email}` : "Hello, Guest"}
          </Typography>
          <Link to={"/cart"}>
            <Badge badgeContent={badgeCount} color="success">
              <ShoppingCartIcon sx={{ color: "black", marginRight: "10px" }} />
            </Badge>
          </Link>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={img2} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {email ? (
                <MenuItem
                  onClick={() => {
                    handleLogout();
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : (
                <Link to={"/auth"}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>

            <Divider orientation="vertical" flexItem sx={{ margin: "0 8px" }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
