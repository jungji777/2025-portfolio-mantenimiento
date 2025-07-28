import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: "Cientifico de datos & Desarrollador Frontend",
      company: "Lovelytics.",
      period: "Inicios de 2024 - Actualidad",
      description: "Desarrollo de aplicaciones web escalables usando React y Node.js. Implementación de arquitecturas microservicios y optimización de bases de datos.",
      achievements: [
        "Limpieza y procesado de datos",
        "Diseñae e implementar dashboards interactivos con frameworks como React, Vue o Angular.",
        "Traducir resultados complejos de modelos en visualizaciones comprnsibles para el usuario final."
      ]
    },
    {
      title: "Data Scientist",
      company: "DataCorp Analytics",
      period: "2020 - 2022",
      description: "Análisis de grandes volúmenes de datos y desarrollo de modelos de machine learning para predicción de comportamiento de usuarios.",
      achievements: [
        "Desarrollé modelos predictivos con 85% de precisión",
        "Automaticé pipelines de datos procesando 100M+ registros",
        "Creé dashboards que aumentaron la toma de decisiones en 30%"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Desarrollo frontend con React y backend con Python Flask. Colaboración en proyectos ágiles y aprendizaje continuo de nuevas tecnologías.",
      achievements: [
        "Desarrollé 15+ componentes reutilizables",
        "Participé en el rediseño completo de la plataforma",
        "Implementé tests unitarios mejorando la cobertura al 90%"
      ]
    }
  ];

  const education = [
    {
      degree: "Maestría en Ciencia de Datos",
      institution: "Universidad Tecnológica",
      period: "2018 - 2020",
      description: "Especialización en machine learning, análisis estadístico y big data."
    },
    {
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Instituto Tecnológico Superior",
      period: "2014 - 2018",
      description: "Fundamentos sólidos en programación, algoritmos y estructuras de datos."
    }
  ];

  const TimelineItem = ({ item, type }: { item: any, type: 'work' | 'education' }) => (
    <div className="timeline-item">
      
      <div className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover-lift">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {type === 'work' ? item.title : item.degree}
            </h3>
            <p className="text-blue-600 font-medium">
              {type === 'work' ? item.company : item.institution}
            </p>
          </div>
          <div className="flex items-center text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
            <Calendar size={14} className="mr-1" />
            {item.period}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          {item.description}
        </p>
        
        {type === 'work' && item.achievements && (
          <ul className="space-y-1">
            {item.achievements.map((achievement: string, index: number) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Experiencia & Educación
          </h2>
          <p className="section-subtitle">
            Mi trayectoria profesional y académica que me ha llevado a ser el desarrollador que soy hoy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Experiencia Laboral</h3>
            </div>
            <div className="relative">
              {workExperience.map((job, index) => (
                <TimelineItem key={index} item={job} type="work" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Educación</h3>
            </div>
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;