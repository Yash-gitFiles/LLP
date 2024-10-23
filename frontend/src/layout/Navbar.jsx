import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Button color="inherit">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Signup</Link>
        </Button>
        <Button color="inherit">
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
        </Button>
        <Button color="inherit">
          <Link to="/allProducts" style={{ textDecoration: 'none', color: 'inherit' }}>Get AllProducts</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
