import React from "react";

const Sidebar = ({ isActive, onClose }) => {
  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`}>
      <button className="close-btn" onClick={onClose}>✖</button>
      <ul>
        <li><a href="#inicio" onClick={onClose}>Inicio</a></li>
        <li><a href="#catalogo" onClick={onClose}>Catálogo</a></li>
        <li><a href="#noticias" onClick={onClose}>Noticias</a></li>
        <li><a href="#nosotros" onClick={onClose}>Sobre Nosotros</a></li>
        <li><a href="#contacto" onClick={onClose}>Contacto</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
