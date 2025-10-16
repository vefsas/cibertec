import React from 'react';

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      <h1>Sobre Nosotros</h1>
      <div className="nosotros-content">
        <div className="mision-vision">
          <div className="mision">
            <h2>Misión</h2>
            <p>Preparar a los estudiantes para ingresar a las mejores universidades del país mediante una educación de calidad, con profesores altamente capacitados y métodos de enseñanza innovadores.</p>
          </div>
          <div className="vision">
            <h2>Visión</h2>
            <p>Ser la academia preuniversitaria líder en el país, reconocida por nuestro alto porcentaje de ingresantes y la excelencia académica de nuestros estudiantes.</p>
          </div>
        </div>

        <div className="historia">
          <h2>Nuestra Historia</h2>
          <p>Fundada en 2005, la Academia Preuniversitaria Éxito ha ayudado a más de 10,000 estudiantes a alcanzar sus sueños de ingresar a la universidad. Contamos con 15 años de experiencia en preparación preuniversitaria.</p>
        </div>

        <div className="logros">
          <h2>Logros</h2>
          <ul>
            <li>+5,000 ingresantes a universidades nacionales</li>
            <li>+3,000 ingresantes a universidades particulares</li>
            <li>95% de satisfacción estudiantil</li>
            <li>15 años de experiencia educativa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;