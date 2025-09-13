import React from "react";
import "../style/Noticias.css";

const Noticias = () => {
  // Ejemplo de noticias. Luego puedes traerlas de una API o BD
  const noticias = [
    {
      id: 1,
      titulo: "Nuevo Vinilo Edición Limitada",
      fecha: "12 Sept 2025",
      descripcion:
        "Presentamos una edición exclusiva de vinilos clásicos en tiraje limitado. ¡Aprovecha antes de que se agoten!",
      imagen: "../../src/img/ViniloNoticia.png",
    },
    {
      id: 2,
      titulo: "Evento en Vivo: Noche de Jazz",
      fecha: "25 Sept 2025",
      descripcion:
        "Únete a nuestra sesión de escucha en vivo, donde compartiremos vinilos de jazz icónicos y charlas con expertos.",
      imagen: "../../src/img/noche.png",
    },
    {
      id: 3,
      titulo: "Tips de Cuidado para tus Vinilos",
      fecha: "30 Sept 2025",
      descripcion:
        "Aprende las mejores técnicas para limpiar y conservar tu colección de vinilos y mantener su sonido impecable.",
      imagen: "../../src/img/cuidado.png",
    },
  ];

  return (
    <section className="noticias">
      <div className="container">
        <h1 className="titulo">Noticias & Novedades</h1>
        <div className="lista-noticias">
          {noticias.map((item) => (
            <article key={item.id} className="tarjeta">
              <img src={item.imagen} alt={item.titulo} className="imagen" />
              <div className="contenido">
                <h2>{item.titulo}</h2>
                <span className="fecha">{item.fecha}</span>
                <p>{item.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
