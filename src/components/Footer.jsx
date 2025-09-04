import React from "react";
import whatsapp from "../img/wsp.png";
import facebook from "../img/facebook.png";
import instagram from "../img/ing.png";
import libro from "../img/librorcl.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="siguenos">
        <p>Síguenos en nuestras redes:</p>
        <div className="iconos">
          <a href="https://wa.me/51962709623" target="_blank" title="WhatsApp" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" width="30" />
          </a>
          <a href="https://facebook.com/tupagina" target="_blank" title="Facebook" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" width="30" />
          </a>
          <a href="https://instagram.com/tupagina" target="_blank" title="Instagram" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" width="30" />
          </a>
        </div>
      </div>

      <p className="copyright">© Derechos de Carlos Franco</p>
      <div>
        <p>2025 Bombos y Tarola</p>
      </div>
      <div>
        <p>LIBRO DE RECLAMACIONES</p>
        <a href="libro.html" target="_blank" title="Libro de Reclamaciones">
          <img src={libro} alt="Libro de Reclamaciones" width="200" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
