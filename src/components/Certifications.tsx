import React, { useEffect } from 'react';
import { Award, Calendar, ExternalLink, Shield, Star, Trophy, GraduationCap, Brain } from 'lucide-react';

const Certifications = () => {
  // Load Credly embed script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const achievements = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AWS Certified",
      description: "Machine Learning Solutions",
      date: "2025",
      color: "blue",
      verified: true
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Google Analytics",
      description: "Certified Professional",
      date: "2023",
      color: "green",
      verified: true
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "GitHub Copilot",
      description: "Early Adopter Program",
      date: "2023",
      color: "purple",
      verified: false
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Microsoft Azure",
      description: "Fundamentals Certified",
      date: "2024",
      color: "blue",
      verified: true
    }
  ];

  const premiumCertifications = [
    {
      title: "Oxford Artificial Intelligence Programme",
      institution: "University of Oxford",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1753313880/Artificial_inteligence_programe_woj5fs.png",
      date: "2024",
      description: "Programa avanzado en Inteligencia Artificial que cubre machine learning, deep learning, ética en IA y aplicaciones empresariales.",
      icon: <Brain className="w-6 h-6" />,
      color: "blue",
      verified: true,
      prestige: "high"
    },
    {
      title: "Applied Generative AI for Digital Transformation",
      institution: "MIT (Massachusetts Institute of Technology)",
      image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1753313881/MIT-Applied_generative_AI_oelgg9.png",
      date: "2023",
      description: "Programa especializado en IA Generativa aplicada a la transformación digital, incluyendo GPT, LLMs y aplicaciones empresariales.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "purple",
      verified: true,
      prestige: "high"
    }
  ];
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200"
  };

  return (
    <section id="certifications" className="section section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Certificaciones & Logros
          </h2>
          <p className="section-subtitle">
            Certificaciones profesionales y reconocimientos que validan mi experiencia 
            y compromiso con el aprendizaje continuo en tecnología.
          </p>
        </div>

        {/* Premium Certifications from Top Universities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certificaciones de Universidades de Prestigio
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {premiumCertifications.map((cert, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-lift animate-fadeInUp relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Prestige indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
                
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Certificate Image */}
                  <div className="flex-shrink-0">
                    <div className="w-full lg:w-48 h-32 lg:h-36 rounded-xl overflow-hidden shadow-lg bg-white p-2">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} - ${cert.institution}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-xl border ${colorClasses[cert.color as keyof typeof colorClasses]}`}>
                        {cert.icon}
                      </div>
                      <div className="flex items-center text-green-600 text-xs">
                        <Shield size={14} className="mr-1" />
                        <span>Verificada</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-3">
                      {cert.institution}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Featured AWS Certification with Credly Badge */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certificación AWS Destacada
          </h3>
          <div className="glass-card p-8 text-center max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Credly Badge Container */}
              <div className="certification-badge-container">
                <div 
                  data-iframe-width="150" 
                  data-iframe-height="270" 
                  data-share-badge-id="0ac08a2f-fdfa-4067-8875-835719ad6b84" 
                  data-share-badge-host="https://www.credly.com"
                  className="credly-badge"
                ></div>
              </div>
              
              {/* Certification Details */}
              <div className="flex-1 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">AWS Certified</h4>
                    <p className="text-blue-600 font-medium">Machine Learning</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Certificación que valida mi experiencia en el diseño de sistemas distribuidos 
                  escalables y seguros en Amazon Web Services, incluyendo arquitecturas de alta 
                  disponibilidad y mejores prácticas de seguridad.
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span>Obtenida en 2025</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Shield size={16} className="mr-1 text-green-500" />
                    Verificada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Certifications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Otras Certificaciones y Logros
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${colorClasses[achievement.color as keyof typeof colorClasses]}`}>
                    {achievement.icon}
                  </div>
                  {achievement.verified && (
                    <div className="flex items-center text-green-600 text-xs">
                      <Shield size={14} className="mr-1" />
                      <span>Verificada</span>
                    </div>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 mb-3">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span>{achievement.date}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Certifications Placeholder */}
        <div className="glass-card p-8 text-center border-2 border-dashed border-gray-300">
          <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Award size={32} />
          </div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Próximas Certificaciones
          </h4>
          <p className="text-gray-500 mb-4">
            Actualmente preparándome para obtener nuevas certificaciones en:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="badge">Kubernetes (CKA)</span>
            <span className="badge">Docker Certified Associate</span>
            <span className="badge">Terraform Associate</span>
            <span className="badge">Google Cloud Professional</span>
            <span className="badge">Applied Calculation By Harvard</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;