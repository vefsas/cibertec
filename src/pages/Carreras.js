// src/pages/Carreras.js
import React from 'react';

const Carreras = () => {
  const carreras = [
    {
      nombre: "Medicina",
      descripcion: "Preparación para el examen de admisión de Medicina",
      universidades: ["UNMSM", "UNFV", "UPCH", "UPC"],
      duracion: "12 meses"
    },
    {
      nombre: "Ingeniería",
      descripcion: "Preparación para carreras de Ingeniería",
      universidades: ["UNI", "UNMSM", "UTP", "UPC"],
      duracion: "10 meses"
    },
    {
      nombre: "Derecho",
      descripcion: "Preparación para el examen de admisión de Derecho",
      universidades: ["UNMSM", "PUCP", "USMP", "ULIMA"],
      duracion: "8 meses"
    },
    {
      nombre: "Administración",
      descripcion: "Preparación para carreras de Administración",
      universidades: ["UNMSM", "PUCP", "USMP", "ULIMA"],
      duracion: "8 meses"
    }
  ];

  return (
    <div className="carreras-page">
      <h1>Carreras Universitarias</h1>
      <p className="intro">Preparamos para el ingreso a las principales carreras de las mejores universidades del país</p>
      
      <div className="carreras-list">
        {carreras.map((carrera, index) => (
          <div key={index} className="carrera-card">
            <h2>{carrera.nombre}</h2>
            <p>{carrera.descripcion}</p>
            <div className="carrera-details">
              <h3>Universidades:</h3>
              <ul>
                {carrera.universidades.map((uni, i) => (
                  <li key={i}>{uni}</li>
                ))}
              </ul>
              <p><strong>Duración:</strong> {carrera.duracion}</p>
            </div>
            {/* Botón eliminado */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carreras;