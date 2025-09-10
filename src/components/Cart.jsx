import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, onRemoveFromCart, onAddToCart }) => {
  const calculeTotal = () =>
    cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);

  return (
    <section className="bg-[#F5F5DC] py-12 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Carrito de Compras
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl mb-4">Tu carrito está vacío.</p>
            <Link
              to="/catalogo"
              className="text-orange-600 font-semibold hover:underline"
            >
              Volver al catálogo
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl shadow-md p-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.nombre}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Precio unitario: ${item.precio.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Subtotal: ${(item.precio * item.cantidad).toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400">
                        Stock disponible: {item.stock}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="bg-red-600 text-white px-2 py-1 rounded-full text-sm hover:bg-red-700"
                      >
                        −
                      </button>
                      <span className="font-semibold">{item.cantidad}</span>
                      <button
                        onClick={() => {
                          if (item.cantidad < item.stock) {
                            onAddToCart(item);
                          }
                        }}
                        className={`px-2 py-1 rounded-full text-sm font-semibold transition ${
                          item.cantidad < item.stock
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-white rounded-xl shadow-md p-6 text-right">
              <h3 className="text-2xl font-bold text-gray-800">
                Total:{" "}
                <span className="text-orange-600">${calculeTotal()}</span>
              </h3>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;