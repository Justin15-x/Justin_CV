// Archivo: src/App.jsx
import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 1. Navbar pegajoso en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal del CV */}
      <main className="max-w-4xl mx-auto p-8 pt-0">
        <Header />
        <Skills />
        <Projects />
        <Education />
      </main>
    </div>
  );
}

export default App;