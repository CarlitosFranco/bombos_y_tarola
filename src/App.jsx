import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Catalogo from "./components/Catalogo";
import Multimedia from "./components/Multimedia";
import Footer from "./components/Footer";


import SobreNosotros from "./components/SobreNosotros";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Formulario from "./components/Formulario";
import Noticias from "./components/Noticias";
import Contacto from "./components/Contacto";

import "./style/style.css";

<Route path="/sobre-nosotros" element={<SobreNosotros />} />

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar al carrito
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
          return prevItems;
        }
      } else {
        return [...prevItems, { ...product, cantidad: 1 }];
      }
    });
  };

  // Quitar del carrito
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
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Catalogo />
                <Multimedia />
                <Formulario /> {/* Newsletter en la home */}
              </>
            }
          />

          {/* Catálogo con lista de productos */}
          <Route
            path="/catalogo"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />

          {/* Carrito de compras */}
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

          {/* Páginas informativas */}
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
