import React, { useState } from 'react';
import '../styles/Platform.css';

const Platform = () => {
  const [activeTab, setActiveTab] = useState('cursos');

  const cursos = [
    { id: 1, nombre: 'Matemáticas Básicas', profesor: 'Juan Pérez', archivo: '/matematicas.pdf' },
    { id: 2, nombre: 'Comunicación Integral', profesor: 'María López', archivo: '/comunicacion.pdf' },
    { id: 3, nombre: 'Razonamiento Verbal', profesor: 'Carlos Ruiz', archivo: '/razonamiento.pdf' }
  ];

  const profesores = [
    { id: 1, nombre: 'Juan Pérez', especialidad: 'Matemáticas', email: 'juan@academia.edu.pe' },
    { id: 2, nombre: 'María López', especialidad: 'Comunicación', email: 'maria@academia.edu.pe' },
    { id: 3, nombre: 'Carlos Ruiz', especialidad: 'Razonamiento', email: 'carlos@academia.edu.pe' }
  ];

  return (
    <div className="platform">
      <h1>Plataforma Virtual</h1>
      
      <div className="platform-tabs">
        <button 
          className={activeTab === 'cursos' ? 'active' : ''} 
          onClick={() => setActiveTab('cursos')}
        >
          Cursos
        </button>
        <button 
          className={activeTab === 'profesores' ? 'active' : ''} 
          onClick={() => setActiveTab('profesores')}
        >
          Profesores
        </button>
        <button 
          className={activeTab === 'pagos' ? 'active' : ''} 
          onClick={() => setActiveTab('pagos')}
        >
          Pagos
        </button>
      </div>

      <div className="platform-content">
        {activeTab === 'cursos' && (
          <div className="cursos-list">
            <h2>Mis Cursos</h2>
            {cursos.map(curso => (
              <div key={curso.id} className="curso-item">
                <h3>{curso.nombre}</h3>
                <p>Profesor: {curso.profesor}</p>
                <a href={curso.archivo} target="_blank" rel="noopener noreferrer" className="btn-descargar">
                  Descargar Material
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'profesores' && (
          <div className="profesores-list">
            <h2>Nuestros Profesores</h2>
            {profesores.map(profesor => (
              <div key={profesor.id} className="profesor-item">
                <h3>{profesor.nombre}</h3>
                <p>Especialidad: {profesor.especialidad}</p>
                <p>Email: {profesor.email}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'pagos' && (
          <div className="pagos-section">
            <h2>Sistema de Pagos</h2>
            <div className="pago-info">
              <p>Estado de cuenta: Al día</p>
              <p>Próximo pago: 05 del próximo mes</p>
              <p>Monto: S/ 350.00</p>
            </div>
            <button className="btn-pagar">Pagar ahora</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Platform;