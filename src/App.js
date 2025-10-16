import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Carreras from './pages/Carreras';
import Programas from './pages/Programas';
import Contacto from './pages/Contacto';
import Eventos from './pages/Eventos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/eventos" element={<Eventos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;