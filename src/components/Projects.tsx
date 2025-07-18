import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
     {
      title: 'AI specs for Blind persons',
      description: 'Ai and Ml driven small specs to assist the Blind persons for their day to day activities and to prevent them from accidents',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Ai Assistance', 'CNN','OpenCv', 'React', 'API'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Computer Vision Disease Detection',
      description: 'CNN-based system for early detection of plant diseases using image analysis. Achieved 92% accuracy on validation dataset.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PyTorch', 'OpenCV', 'CNN', 'Healthcare'],
      github: '#',
      demo: '#',
      featured: true
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${
                project.featured 
                  ? 'lg:grid-cols-2' 
                  : 'lg:grid-cols-1'
              } grid gap-8 items-center bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300`}
            >
              <div className={`${project.featured && index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              <div className={`space-y-6 ${project.featured && index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 font-medium"
                  >
                    <Github className="h-5 w-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    <Play className="h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};