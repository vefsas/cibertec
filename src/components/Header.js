import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.jpeg" alt="Academia Pre-Universitaria Éxito" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">INICIO</a></li>
          <li><a href="/nosotros">NOSOTROS</a></li>
          <li><a href="/carreras">CARRERAS</a></li>
          <li><a href="/programas">PROGRAMAS</a></li>
          <li><a href="/contacto">CONTACTO</a></li>
          <li><a href="/eventos">EVENTOS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;