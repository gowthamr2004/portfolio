import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Elephantine Enterprises',
      location: 'Onsite',
      period: 'Aug - Sep(2024)',
      description: 'Developed the Website for organisation with cutting edge technologies and deployed that successfully',
      achievements: [
        'Developed full furnised Website for them',
        'Successfully deployed the site on public platform',
        'Implemented API integrations with 99.9% uptime'
      ]
    },
    {
      title: 'UI/UX Developer Intern',
      company: 'OneYes infotech solutions',
      location: 'Onsite',
      period: 'Jun - Jul(2024)',
      description: 'Improved the existing design and made the user friendly site for their organisation',
      achievements: [
        'Improved their existing web design',
        'Made it more user friendly site',
        'Mentored 3 junior students'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building expertise through hands-on industry experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-slate-600 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <Award className="h-5 w-5 text-blue-600" />
                        Key Achievements
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-slate-600"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};