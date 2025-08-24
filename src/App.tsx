import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      {/* Светло-синий градиентный фон для лучшей читаемости */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/90 via-cyan-50/80 to-blue-100/90 -z-5"></div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
