import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductList = ({ onAddToCart }) => {
  return (
    <section className="seccion-vinilos">
      <h2 className="titulo-vinilos">Catálogo de Vinilos</h2>
      <div className="grid-vinilos">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;