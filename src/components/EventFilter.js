import React, { useState } from 'react';

const EventFilter = ({ onFilterChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <section className="filtros-section">
      <div className="search-container">
        <input 
          type="text" 
          id="event-search" 
          placeholder="Buscar eventos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Buscar</button>
      </div>
      <div className="filtros-eventos">
        <button onClick={() => onFilterChange('all')}>Todos</button>
        <button onClick={() => onFilterChange('simulacro')}>Simulacros</button>
        <button onClick={() => onFilterChange('charla')}>Charlas</button>
        <button onClick={() => onFilterChange('taller')}>Talleres</button>
        <button onClick={() => onFilterChange('feria')}>Ferias</button>
      </div>
    </section>
  );
};

export default EventFilter;