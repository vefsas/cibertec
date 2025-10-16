import React from 'react';

const EventList = ({ events, onRegister }) => {
  return (
    <section className="eventos-futuros">
      <h2>Eventos Destacados</h2>
      <div className="evento-lista">
        {events.map((event, index) => (
          <div key={index} className="evento-item" data-category={event.category}>
            <div className="fecha">{event.date}</div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;