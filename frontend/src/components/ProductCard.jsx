import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function ProductCard() {
  const [file, setFile] = useState();

  const token = localStorage.getItem("token");

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/product",
        formData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.data.success) {
        alert("Product uploaded successfully!");
      } else {
        alert("Failed to upload product.");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("An error occurred while uploading the product.");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button variant="outlined" component="span">
          Choose File
        </Button>
      </label>
      <Button variant="contained" color="primary" onClick={upload}>
        Upload
      </Button>
    </Box>
  );
}

export default ProductCard;