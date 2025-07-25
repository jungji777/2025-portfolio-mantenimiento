import React from 'react';
import { Code, Database, Brain, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desarrollo Full-Stack",
      description: "Experiencia en React, Node.js y tecnologías modernas"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Ciencia de Datos",
      description: "Análisis avanzado con Python, SQL y machine learning"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA & Machine Learning",
      description: "Implementación de modelos predictivos y NLP"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovación",
      description: "Soluciones creativas para problemas complejos"
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "Python", "React", "Node.js", "SQL",
    "pandas", "scikit-learn", "TensorFlow", "MongoDB", "PostgreSQL", "AWS"
  ];

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Sobre mí
          </h2>
          <p className="section-subtitle">
            Soy un desarrollador apasionado por la tecnología y los datos, con más de 3 años 
            de experiencia creando aplicaciones web robustas y analizando datos para generar 
            insights valiosos para el negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card text-center p-6 hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Stack Tecnológico
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;