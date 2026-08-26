import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

function Home() { return <main><h1>Home</h1></main>; }
function About() { return <main><h1>About</h1></main>; }
function Services() { return <main><h1>Services</h1></main>; }
function Contact() { return <main><h1>Contact</h1></main>; }

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
