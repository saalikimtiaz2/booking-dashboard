import React from "react";
import Dashboard from "./pages/Dashboard";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <Dashboard />
    </CartContextProvider>
  );
}

export default App;
