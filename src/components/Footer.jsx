import React from "react";
import whatsapp from "../img/wsp.png";
import facebook from "../img/facebook.png";
import instagram from "../img/ing.png";
import libro from "../img/librorcl.jpg";

const Footer = () => {
  // 👉 Descargar el PDF automáticamente
  const handleLibroDownload = () => {
    const link = document.createElement("a");
    link.href = "/libro_reclamaciones.pdf";   // Ruta dentro de public
    link.download = "libro_reclamaciones.pdf"; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer>
      <div className="siguenos">
        <p>Síguenos en nuestras redes:</p>
        <div className="iconos">
          <a
            href="https://wa.me/51962709623"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <img src={whatsapp} alt="WhatsApp" width="30" />
          </a>
          <a
            href="https://facebook.com/tupagina"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <img src={facebook} alt="Facebook" width="30" />
          </a>
          <a
            href="https://instagram.com/tupagina"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img src={instagram} alt="Instagram" width="30" />
          </a>
        </div>
      </div>

      <p className="copyright">© Derechos de Carlos Franco</p>
      <div>
        <p>2025 Bombos y Tarola</p>
      </div>

      {/* 🔴 Libro de Reclamaciones */}
      <div className="libro-reclamaciones">
        <p>LIBRO DE RECLAMACIONES</p>
        <button
          onClick={handleLibroDownload}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          title="Descargar Libro de Reclamaciones"
        >
          <img src={libro} alt="Libro de Reclamaciones" width="200" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
