import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="tarjeta-producto">
      <div className="tarjeta-imagen">
        <img src={product.imagen} alt={product.nombre} />
      </div>

      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{product.nombre}</h3>
        <p className="tarjeta-descripcion">{product.descripcion}</p>

        <div className="tarjeta-footer">
          <span className="tarjeta-precio">${product.precio.toFixed(2)}</span>
        <button
        onClick={() => onAddToCart(product)}
        className="..."
        >
        Comprar
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;