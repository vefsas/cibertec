import React, { useState } from 'react';
import ModalMatricula from '../components/ModalMatricula';
import ModalInscripcion from '../components/ModalInscripcion';
import Platform from '../components/Platform';
import '../styles/Home.css';


const Home = () => {

  const [showHorarios, setShowHorarios] = useState(false);
  const [showPlataforma, setShowPlataforma] = useState(false);


  const toggleHorarios = () => setShowHorarios(prev => !prev);
  const togglePlataforma = () => setShowPlataforma(prev => !prev);

  

  return (
     <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>PREPÁRATE PARA TU INGRESO UNIVERSITARIO</h1>
          <p>La mejor preparación para los exámenes de admisión</p>
        </div>
        <img src="/estudiantes.jpg" alt="Estudiantes preparándose" />
      </section>

      {/* Accesos rápidos */}
      <section className="accesos">
        
        <button onClick={toggleHorarios}>HORARIOS</button>
        <button onClick={togglePlataforma}>PLATAFORMA VIRTUAL</button>
      </section>

      {/* Horarios */}
      {showHorarios && (
        <section className="horarios">
          <h2>Horarios de Clases</h2>
          <div className="horarios-content">
            <div className="horario-item">
              <h3>Turno Mañana</h3>
              <p>Lunes a Viernes: 8:00 am - 12:00 pm</p>
            </div>
            <div className="horario-item">
              <h3>Turno Tarde</h3>
              <p>Lunes a Viernes: 2:00 pm - 6:00 pm</p>
            </div>
            <div className="horario-item">
              <h3>Turno Noche</h3>
              <p>Lunes a Viernes: 6:30 pm - 9:30 pm</p>
            </div>
            <div className="horario-item">
              <h3>Fin de Semana</h3>
              <p>Sábados: 8:00 am - 2:00 pm</p>
            </div>
          </div>
        </section>
      )}

      {/* Plataforma Virtual */}
      {showPlataforma && (
        <section className="plataforma-section">
          <Platform />
        </section>
      )}

      {/* Comunicados */}
      <section className="comunicados">
        <h2>NOTICIAS Y AVISOS</h2>
        <div className="cards">
          <div className="card azul">
            <h3>PROXIMOS EXAMENES</h3>
            <p>Conoce las fechas de los próximos exámenes de simulación.</p>
          </div>
          <div className="card rojo">
            <h3>BECAS</h3>
            <p>Convocatoria abierta para becas de estudio 2023.</p>
          </div>
          <div className="card azul">
            <h3>TALLERES</h3>
            <p>Inscripciones abiertas para talleres de técnicas de estudio.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;