import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (number) => {
    try {
      console.log("Fetching Products", number);
      setLoading(true);
      const res = await axios.get(
        `https://fakestoreapi.com/products?limit=${number * 3}`
      );
      const allProducts = await res.data;
      setProducts(allProducts);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("I am called at render");
    fetchProducts(1);
  }, []);

  return {
    loading,
    products,
    fetchProducts,
  };
};

export default useProducts;
