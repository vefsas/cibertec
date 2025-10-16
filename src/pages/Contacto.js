// src/pages/Contacto.js
import React, { useState } from 'react';
import ModalInscripcion from '../components/ModalInscripcion';

const Contacto = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="contacto-page">
      <h1>Contacto</h1>
      <div className="contacto-container">
        <div className="contacto-info">
          <h2>Información de Contacto</h2>
          <p><strong>Dirección:</strong> Av. Pizarro 123, Surquillo, Lima, Perú</p>
          <p><strong>Teléfono:</strong> +51 999 999 999</p>
          <p><strong>Email:</strong> contacto@academiapre.edu.pe</p>
          
          <div className="mapa">
            <iframe
              title="Ubicación Academia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.966235738673!2d-77.0216239856182!3d-12.117737191457937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8193ff7e52d%3A0x3c711c3240b73c36!2sSurquillo!5e0!3m2!1ses!2spe!4v1633034962354!5m2!1ses!2spe"
              width="100%"
              height="300"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        {/* <div className="contacto-form">
          <h2>Envíanos un mensaje</h2>
          <button className="btn-contacto" onClick={openModal}>
            Contactar ahora
          </button>
          <p className="contacto-alternativo">O si prefieres, llámanos al +51 999 999 999</p>
        </div> */}
      </div> 

      {showModal && (
        <ModalInscripcion 
          closeModal={closeModal} 
          tipo="contacto" 
        />
      )}
    </div>
  );
};

export default Contacto;