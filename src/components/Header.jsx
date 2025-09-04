import React, { useState } from 'react';
import logo from '../img/logo.png';
import Sidebar from './Sidebar';

const Header = () => {
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
        <input 
          type="text" 
          className="lupita" 
          placeholder="Buscar vinilos..." 
        />

        <div>
          <h2>"Donde gira la pasión por la música"</h2>
        </div>

        <nav className="main-nav">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#noticias">Noticias</a></li>
            <li><a href="#nosotros">Sobre Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
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

