import React from "react";
import "../style/SobreNosotros.css";

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
      <div className="container">
        <h1 className="titulo-principal">
          Sobre <span className="resaltado">Bombos y Tarola</span>
        </h1>

        <div className="bloque">
          <h2 className="subtitulo">Nuestra Historia</h2>
          <p>
            Nacimos de una pasión por el sonido cálido y auténtico del vinilo.
            Bombos y Tarola comenzó como un pequeño puesto de vinilos en Lima,
            y hoy somos una tienda online que busca compartir esa magia con
            coleccionistas y melómanos de todo el mundo.
          </p>
        </div>

        <div className="grid-mision-vision">
          <div>
            <h2 className="subtitulo">Nuestra Misión</h2>
            <p>
              Ofrecer una experiencia única a cada amante de la música,
              brindando vinilos de alta calidad y fomentando la cultura del
              coleccionismo con un servicio cercano y confiable.
            </p>
          </div>
          <div>
            <h2 className="subtitulo">Nuestra Visión</h2>
            <p>
              Ser la tienda de referencia en Perú y Latinoamérica para
              coleccionistas de vinilos, inspirando a nuevas generaciones a
              redescubrir el encanto del formato analógico.
            </p>
          </div>
        </div>

        <div className="contacto">
          <h2 className="subtitulo">Contáctanos</h2>
          <p>
            📍 Lima, Perú <br />
            ✉️{" "}
            <a href="mailto:contacto@bombosytarola.com">
              contacto@bombosytarola.com
            </a>
            <br />
            📞 +51 999 888 777
          </p>
        </div>

        <div className="mt-12 text-center">
          <span className="text-sm text-gray-500">© Carlos Franco · Bombos y Tarola · 2025</span>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
