import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/pages/getProducts.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

function GetProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product/getProducts?page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      if (response.data.data.length > 0) {
        setAllProducts((prev) => [...prev, ...response.data.data]);
        setPage((prev) => prev + 1); 
      } else {
        setHasMore(false); 
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <InfiniteScroll
        dataLength={allProducts.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className={styles.productList}>
          {allProducts.map((product) => (
            <img
              src={`http://localhost:8000/${product.img.replace("\\", "/")}`}
              key={product._id}
              alt="Product"
              className={styles.productImage}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default GetProducts;
