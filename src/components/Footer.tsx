import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">César Betancourth</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Soy un desarrollador Full-Stack y Científico de Datos apasionado por crear 
              soluciones tecnológicas innovadoras que impacten positivamente en las personas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/jungji777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-200 hover-lift"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jungji-betancourth-49bba1345" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-2xl hover:bg-blue-600 transition-all duration-200 hover-lift"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:jungjibetancourth@gmail.com"
                className="p-3 bg-gray-800 rounded-2xl hover:bg-green-600 transition-all duration-200 hover-lift"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desarrollo Web</li>
              <li>Análisis de Datos</li>
              <li>Machine Learning</li>
              <li>Consultoría Técnica</li>
              <li>APIs & Backend</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            © {currentYear} cesarbetancourth. Hecho con <Heart className="w-4 h-4 text-red-500 mx-1" /> y mucho té negro.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="text-sm">Vamos arriba</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;