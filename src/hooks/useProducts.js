import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (number) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://fakestoreapi.com/products?limit=${number}`
      );
      const { allProducts } = await res.data;
      setProducts(allProducts);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    loading,
    products,
    fetchProducts,
  };
};

export default useProducts;
