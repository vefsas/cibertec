import React, { useState } from 'react';
import '../styles/Modal.css';

const ModalMatricula = ({ closeModal }) => {
  const [isMinor, setIsMinor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Solicitud de matrícula enviada con éxito. Nos pondremos en contacto contigo pronto.");
    closeModal();
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 9);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Formulario de Matrícula - Academia Pre-Universitaria</h2>
        <form id="matriculaForm" onSubmit={handleSubmit}>
          {/* Formulario completo como en el HTML original */}
          <div className="section-title">Datos Personales</div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombres">Nombres:</label>
              <input type="text" id="nombres" name="nombres" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos:</label>
              <input type="text" id="apellidos" name="apellidos" required />
            </div>
          </div>
          
          {/* Resto del formulario... */}
          
          <div className="form-group">
            <label>
              <input 
                type="checkbox" 
                id="menor_edad" 
                name="menor_edad" 
                checked={isMinor}
                onChange={(e) => setIsMinor(e.target.checked)}
              />
              ¿Es menor de edad?
            </label>
          </div>
          
          {isMinor && (
            <div id="tutorInfo" className="tutor-info">
              {/* Campos del tutor */}
            </div>
          )}
          
          <button type="submit" className="btn-submit">ENVIAR SOLICITUD DE MATRÍCULA</button>
        </form>
      </div>
    </div>
  );
};

export default ModalMatricula;