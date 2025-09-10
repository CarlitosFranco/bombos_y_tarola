import React from "react";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
  return (
    <section className="bg-[#F5F5DC] py-16 px-6 text-gray-800">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-10 text-orange-600">
          Sobre Nosotros
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            En <span className="font-semibold text-orange-700">Bombos y Tarola</span>, giramos al ritmo de la pasión por la música. Somos una tienda dedicada a los vinilos, donde cada disco cuenta una historia y cada cliente forma parte de una comunidad que valora el sonido auténtico.
          </p>

          <p>
            Nuestra misión es ofrecer una experiencia única a los amantes del vinilo, con una selección curada de álbumes clásicos, joyas ocultas y lanzamientos contemporáneos. Creemos que la música no solo se escucha, se vive.
          </p>

          <p>
            Este proyecto también es una aventura educativa y creativa que compartimos con <span className="font-semibold text-orange-700">Gabriel</span>, fomentando la curiosidad, la organización y el amor por el arte. Cada vinilo es una oportunidad para aprender, conectar y celebrar.
          </p>

          <p>
            Gracias por formar parte de esta historia. ¡Que la música siga girando!
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