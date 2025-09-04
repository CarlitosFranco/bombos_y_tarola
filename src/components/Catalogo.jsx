import React from "react";
import vini1 from "../img/vinilo.jpg";
import vini2 from "../img/vinilo2.jpg";
import vini3 from "../img/vinilo3.jpeg";
import vini4 from "../img/vinilo4.jpeg";
import vini5 from "../img/vinilo5.jpeg";
import vini6 from "../img/vinilo6.jpg";

const Catalogo = () => {
  return (
    <section className="galeria-vinilos">
      <h1>Vinilos en Venta</h1>
      <div className="vinilos-fila">
        <button className="vinilo-btn" aria-label="Vinilo 1">
          <img src={vini1} alt="Vinilo 1" width="300" height="200" />
        </button>
        <button className="vinilo-btn" aria-label="Vinilo 2">
          <img src={vini2} alt="Vinilo 2" width="300" height="200" />
        </button>
        <button className="vinilo-btn" aria-label="Vinilo 3">
          <img src={vini3} alt="Vinilo 3" width="300" height="200" />
        </button>
      </div>
      <div className="vinilos-fila">
        <button className="vinilo-btn" aria-label="Vinilo 4">
          <img src={vini4} alt="Vinilo 4" width="300" height="200" />
        </button>
        <button className="vinilo-btn" aria-label="Vinilo 5">
          <img src={vini5} alt="Vinilo 5" width="300" height="200" />
        </button>
        <button className="vinilo-btn" aria-label="Vinilo 6">
          <img src={vini6} alt="Vinilo 6" width="300" height="200" />
        </button>
      </div>
    </section>
  );
};

export default Catalogo;
