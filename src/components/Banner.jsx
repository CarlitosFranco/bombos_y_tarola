import React from "react";
import banner from "../img/vini.jpg";

const Banner = () => {
  return (
    <main>
      <section className="banner">
        <button className="banner_boton"></button>
      </section>

      <section className="clasico_nuevo">
        <button className="clasico"></button>
        <button className="nuevo"></button>
      </section>

      <section className="vinilos">
        <button className="desde89">
          <div className="contenido">
            <div className="texto">
              <h1>VINILOS</h1>
              <p>Desde S/. 89</p>
            </div>
            <div className="vini">
              <img src={banner} alt="banner" />
            </div>
          </div>
        </button>
      </section>
    </main>
  );
};

export default Banner;
