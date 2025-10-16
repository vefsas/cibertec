import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contacto">
        <p><strong>CONTACTOS</strong></p>
        <p>Av. Pizarro de Junín 178 - La Victoria - Lima Perú</p>
        <p>+51 999 999 999</p>
        <p>contacto@academiapre.edu.pe</p>
        <p>www.academiapreuniversitaria.com</p>
      </div>
      <div className="redes">
        <p><strong>SÍGUENOS</strong></p>
        <ul className="social">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>TikTok</li>
          <li>www.academiapreuniversitaria.com</li>
        </ul>
      </div>
      <div className="importante">
        <p><strong>IMPORTANTE</strong></p>
        <ul>
          <li>Calendario académico</li>
          <li>Resultados de simulacros</li>
          <li>Biblioteca virtual</li>
          <li>Política de privacidad</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;