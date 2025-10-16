// src/pages/Programas.js
import React from 'react';

const Programas = () => {
  const programas = [
    {
      nombre: "Programa Regular",
      descripcion: "Programa completo de preparación para examen de admisión",
      duracion: "10 meses",
      horarios: ["Mañana: 8:00 am - 12:00 pm", "Tarde: 2:00 pm - 6:00 pm"],
      precio: "S/ 300 mensual"
    },
    {
      nombre: "Programa Intensivo",
      descripcion: "Programa acelerado para examen de admisión",
      duracion: "6 meses",
      horarios: ["Mañana: 8:00 am - 1:00 pm", "Tarde: 2:00 pm - 7:00 pm"],
      precio: "S/ 400 mensual"
    },
    {
      nombre: "Programa Semi-presencial",
      descripcion: "Combinación de clases presenciales y virtuales",
      duracion: "8 meses",
      horarios: ["Fines de semana: 8:00 am - 2:00 pm"],
      precio: "S/ 250 mensual"
    },
    {
      nombre: "Clases Particulares",
      descripcion: "Clases personalizadas one-to-one",
      duracion: "Flexible",
      horarios: ["A convenir con el profesor"],
      precio: "S/ 50 por hora"
    }
  ];

  return (
    <div className="programas-page">
      <h1>Programas Académicos</h1>
      <p className="intro">Ofrecemos diferentes modalidades de estudio para adaptarnos a tus necesidades</p>
      
      <div className="programas-list">
        {programas.map((programa, index) => (
          <div key={index} className="programa-card">
            <h2>{programa.nombre}</h2>
            <p>{programa.descripcion}</p>
            <div className="programa-details">
              <p><strong>Duración:</strong> {programa.duracion}</p>
              <p><strong>Horarios:</strong></p>
              <ul>
                {programa.horarios.map((horario, i) => (
                  <li key={i}>{horario}</li>
                ))}
              </ul>
              <p><strong>Inversión:</strong> {programa.precio}</p>
            </div>
            {/* Botón eliminado */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programas;