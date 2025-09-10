import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Catalogo from "./components/Catalogo";
import Multimedia from "./components/Multimedia";
import Footer from "./components/Footer";


import SobreNosotros from "./components/SobreNosotros";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./style/style.css";

<Route path="/sobre-nosotros" element={<SobreNosotros />} />

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.cantidad < product.stock) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
        } else {
          return prevItems; // ya alcanzó el stock
        }
      } else {
        return [...prevItems, { ...product, cantidad: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <Router>
      <Header cartCount={totalItems} />
      <Sidebar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Catalogo />
                <Multimedia />
              </>
            }
          />
          <Route
            path="/catalogo"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/carrito"
            element={
              <Cart
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;