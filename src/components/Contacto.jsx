import React, { useState } from "react";
import "../style/Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState(""); // "", "enviado", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xjkezpgz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        }),
      });

      if (res.ok) {
        setStatus("enviado");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="contacto">
      <div className="container">
        <h1 className="titulo">Contáctanos</h1>
        <p className="intro">
          ¿Tienes preguntas, pedidos especiales o sugerencias? Escríbenos y te
          responderemos lo antes posible.
        </p>

        <div className="contenido">
          {/* Información de contacto */}
          <div className="info">
            <h2>Nuestra Tienda</h2>
            <p>📍 Lima, Perú</p>
            <p>📞 +51 999 888 777</p>
            <p>
              ✉️{" "}
              <a href="mailto:contacto@bombosytarola.com">
                contacto@bombosytarola.com
              </a>
            </p>
          </div>

          {/* Formulario */}
          <form className="formulario" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Correo electrónico
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Mensaje
              <textarea
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button type="submit">Enviar</button>

            {status === "enviado" && (
              <p className="exito">¡Mensaje enviado con éxito! 🎉</p>
            )}
            {status === "error" && (
              <p className="error">Hubo un problema. Intenta de nuevo.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
