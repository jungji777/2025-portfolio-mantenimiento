import React from 'react';
import { Code, Database, Brain, Cloud, Wrench, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "React", level: 100 },
        { name: "TypeScript", level: 100 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Vue.js", level: 99 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      color: "green",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 65 }
      ]
    },
    {
      title: "Data Science",
      icon: <Brain className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "Python", level: 90 },
        { name: "pandas", level: 85 },
        { name: "scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Jupyter", level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "red",
      skills: [
        { name: "Oracle Apex", level: 99 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 99 },
        { name: "Redis", level: 70 },
        { name: "SQLite", level: 80 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "yellow",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Vercel", level: 85 },
        { name: "Netlify", level: 99 },
        { name: "GitHub Actions", level: 70 },
        { name: "Linux", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-6 h-6" />,
      color: "gray",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Jest", level: 75 },
        { name: "Webpack", level: 70 }
      ]
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    red: "bg-red-100 text-red-700 border-red-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200"
  };

  const progressColors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    gray: "bg-gray-600"
  };

  return (
    <section id="skills" className="section section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Habilidades Técnicas
          </h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que domino para crear soluciones completas y eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift animate-slideInLeft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-2xl border ${colorClasses[category.color as keyof typeof colorClasses]} mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`skill-progress ${progressColors[category.color as keyof typeof progressColors]}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;