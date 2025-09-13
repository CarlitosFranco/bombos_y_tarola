import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import 2pac from "../img/catalogo/2pac.jpg";
import led from "../img/catalogo/led.jpg";
import miles from "../img/catalogo/miles.jpg";
import kra from "../img/catalogo/kra.jpg";
import michael from "../img/catalogo/michael.jpg";
import art from "../img/catalogo/art.jpg";
import bob from "../img/catalogo/bob.jpg";
import pink from "../img/catalogo/pink.jpg";
import queen from "../img/catalogo/queen.jpg";  

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