import React from 'react';
import { ExternalLink, Github, Database, Globe, Brain, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Analytics Dashboard",
      description: "Dashboard interactivo para análisis de ventas en tiempo real con visualizaciones avanzadas y predicciones de demanda usando machine learning.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js", "scikit-learn"],
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Base de datos para instituciones académicas",
      description: "Aplicación web que utiliza algoritmos de filtrado colaborativo y content-based filtering para recomendar productos personalizados.",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "Docker"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "API REST para IoT",
      description: "API escalable para gestión de dispositivos IoT con autenticación JWT, documentación automática y monitoreo en tiempo real.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Socket.io"],
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: null,
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Portfolio Web Responsive",
      description: "Sitio web moderno y totalmente responsive desarrollado con las mejores prácticas de SEO y optimización de performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="section section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Proyectos Destacados
          </h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más recientes que demuestran mis habilidades 
            en desarrollo web y ciencia de datos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group animate-scaleIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="badge badge-primary text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;