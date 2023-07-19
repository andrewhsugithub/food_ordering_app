import React from "react";
import "./App.css";
import Header from "./Header/Header";
import About from "./About/About";
import Menu from "./Menu/Menu";
import CartProvider from "./hooks/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <About />
      <Menu />
    </CartProvider>
  );
}

export default App;
