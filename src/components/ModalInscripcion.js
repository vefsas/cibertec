import React, { useState } from 'react';
import '../styles/Modal.css';


const ModalInscripcion = ({ closeModal, tipo = 'evento', eventoNombre = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    carreraInteres: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = tipo === 'evento' 
      ? `Inscripción enviada para el evento: ${eventoNombre}`
      : 'Solicitud de inscripción enviada con éxito';
    
    alert(mensaje);
    closeModal();
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h3>{tipo === 'evento' ? `Inscripción a ${eventoNombre}` : 'Formulario de Inscripción'}</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nombre" 
            placeholder="Nombre completo" 
            value={formData.nombre}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Correo electrónico" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="tel" 
            name="telefono" 
            placeholder="Teléfono" 
            value={formData.telefono}
            onChange={handleChange}
            required 
          />
          <select name="carreraInteres" value={formData.carreraInteres} onChange={handleChange}>
            <option value="">Seleccione carrera de interés</option>
            <option value="ingenieria">Ingeniería</option>
            <option value="medicina">Medicina</option>
            <option value="derecho">Derecho</option>
            <option value="administracion">Administración</option>
          </select>
          {tipo === 'contacto' && (
            <textarea 
              name="mensaje" 
              placeholder="Mensaje" 
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">Enviar {tipo === 'evento' ? 'inscripción' : 'mensaje'}</button>
        </form>
      </div>
    </div>
  );
};


export default ModalInscripcion;