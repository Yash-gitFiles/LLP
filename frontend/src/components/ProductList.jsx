import React from "react";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

function ProductList() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: '#f5f5f5', // Light background
        minHeight: '100vh', // Full height
      }}
    >
      <ProductCard />
    </Box>
  );
}

export default ProductList;
