import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Maintenance } from './components/Maintenance/Maintenance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

// Placeholder Pages
function Home() { return <main><h1>Home</h1></main>; }
function About() { return <main><h1>About</h1></main>; }
function Services() { return <main><h1>Services</h1></main>; }
function Contact() { return <main><h1>Contact</h1></main>; }

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
        
        {/* Public Routes (Maintenance Mode) */}
        <Route path="/" element={<Maintenance />} />
        <Route path="/about" element={<Maintenance />} />
        <Route path="/services" element={<Maintenance />} />
        <Route path="/contact" element={<Maintenance />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
