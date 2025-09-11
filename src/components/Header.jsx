import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Sidebar from "./Sidebar";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


const Header = ({ cartCount }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleToggleMenu = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Bombos y Tarola Logo" />
          <h1>Bombos y Tarola</h1>
        </div>

        {/* Barra de búsqueda */}
        <input type="text" className="lupita" placeholder="Buscar vinilos..." />

        <div>
          <h2>"Donde gira la pasión por la música"</h2>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/catalogo">Catálogo</Link>
            </li>
            <li>
              <Link to="/noticias">Noticias</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/carrito" className="relative flex items-center">
                <ShoppingCartIcon className="h-7 w-7 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          onClick={handleToggleMenu}
        >
          ☰
        </button>
      </header>

      {/* Sidebar separado */}
      <Sidebar isActive={isSidebarActive} onClose={handleToggleMenu} />
    </>
  );
};

export default Header;

