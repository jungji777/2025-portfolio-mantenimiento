import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import CVButton from './CVButton';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-300 overflow-hidden shadow-xl ring-4 ring-white hover-lift">
            <img 
              src="https://res.cloudinary.com/df5jie5rz/image/upload/v1752974655/IMG_2191_wjdrjf.jpg" 
              alt="Foto profesional"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            ¡Hola! Soy <span className="gradient-text">César Betancourth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            Desarrollador Full-Stack & Científico de Datos
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Creo soluciones tecnológicas innovadoras combinando desarrollo web moderno 
            con análisis de datos avanzado para resolver problemas complejos del mundo real.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <a 
            href="https://github.com/jungji777" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
          >
            <Github size={24} />
          </a>
          <a 
            href="www.linkedin.com/in/cesar-betancourth-784b54268" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:jungjibetancourth@gmail.com"
            className="social-link email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Prominent CV Download Button */}
        <div className="flex justify-center mb-12">
          <CVButton variant="hero" size="lg" />
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;