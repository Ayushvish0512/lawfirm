import React from 'react';
import { Header } from './components/Header/Header';
import { Chatbox } from './components/Chatbox/Chatbox';
import { Footer } from './components/Footer/Footer';
import { Maintenance } from './components/Maintenance/Maintenance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { BookConsultation } from './pages/BookConsultation';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Production/Dev Routes */}
        <Route path="/home2" element={<Home />} />
        <Route path="/about2" element={<About />} />
        <Route path="/services2" element={<Services />} />
        <Route path="/contact2" element={<Contact />} />
        <Route path="/book-consultation" element={<BookConsultation />} />

        {/* Public Routes (Maintenance Mode) */}
        <Route path="/" element={<Maintenance />} />
        <Route path="/about" element={<Maintenance />} />
        <Route path="/services" element={<Maintenance />} />
        <Route path="/contact" element={<Maintenance />} />
      </Routes>
      <Footer />
      <Chatbox />
    </BrowserRouter>
  );
}

export default App;
