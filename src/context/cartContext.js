/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
  totalPrice: "",
  products: [],
  addToCard: () => {},
});

function CartContextProvider({ children }) {
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  useEffect(() => {
    const total = products.reduce((prev, curr) => curr.price + prev, 0);
    setPrice(total);
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        totalPrice: price,
        products,
        addToCard: handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContextProvider;
