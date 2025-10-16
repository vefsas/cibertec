import React, { useState } from 'react';
import Countdown from '../components/Countdown';
import EventFilter from '../components/EventFilter';
import EventList from '../components/EventList';
import Calendar from '../components/Calendar';
import Gallery from '../components/Gallery';
import ModalInscripcion from '../components/ModalInscripcion';
import '../styles/Eventos.css';

const Eventos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // eventsData debe declararse ANTES de usarla en filteredEvents
  const eventsData = [
    {
      id: 'simulacro-uni',
      date: '01/08',
      title: 'Simulacro UNI',
      description: 'Examen completo con estándares de la Universidad Nacional de Ingeniería.',
      category: 'simulacro'
    },
    {
      id: 'feria-universitaria',
      date: '05/08',
      title: 'Feria Universitaria',
      description: 'Representantes de las principales universidades del país.',
      category: 'feria'
    },
    {
      id: 'charla-vocacional',
      date: '08/08',
      title: 'Charlas Vocacionales',
      description: 'Orientación profesional con expertos en diversas carreras.',
      category: 'charla'
    },
    {
      id: 'taller-matematicas',
      date: '12/08',
      title: 'Taller de Matemáticas',
      description: 'Técnicas avanzadas para el examen de admisión.',
      category: 'taller'
    },
    {
      id: 'simulacro-sm',
      date: '15/08',
      title: 'Simulacro SAN MARCOS',
      description: 'Examen tipo DECO con evaluación de resultados.',
      category: 'simulacro'
    }
  ];

  // Ahora filteredEvents puede usar eventsData sin problemas
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  // Función getEventName definida correctamente
  const getEventName = (eventId) => {
    switch(eventId) {
      case 'simulacro-julio': return 'Simulacro de Admisión Julio 2025';
      case 'simulacro-uni': return 'Simulacro UNI';
      case 'feria-universitaria': return 'Feria Universitaria';
      case 'charla-vocacional': return 'Charlas Vocacionales';
      case 'taller-matematicas': return 'Taller de Matemáticas';
      case 'simulacro-sm': return 'Simulacro SAN MARCOS';
      default: return 'Evento';
    }
  };

  const openModal = (eventId) => {
    setSelectedEvent(eventId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(eventsData.filter(event => event.category === category));
    }
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      handleFilterChange(activeFilter);
      return;
    }
    
    const filtered = eventsData.filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredEvents(filtered);
  };

  return (
    <div className="eventos-page">
      <Countdown openModal={openModal} />
      
      <EventFilter 
        onFilterChange={handleFilterChange} 
        onSearch={handleSearch} 
      />
      
      <EventList 
        events={filteredEvents} 
        onRegister={openModal} 
      />
      
      <Calendar />
      
      <Gallery />
      
      {showModal && (
        <ModalInscripcion 
          eventoNombre={getEventName(selectedEvent)}
          closeModal={closeModal} 
          tipo="evento"
        />
      )}
    </div>
  );
};

export default Eventos;