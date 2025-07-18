import React from 'react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech - Artificial Intelligence and Data Science',
      institution: 'Sri Sairam Engineering College',
      period: '2022 - 2026',
      gpa: '8.08/10.0',
      description: 'Specialized in machine learning, deep learning, and neural networks with focus on practical applications.',
      coursework: ['Advanced Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing']
    },
    {
      degree: '12th Grade',
      institution: 'Little Flower Matriculation Hr Sec School',
      period: '2022',
      gpa: '89%',
      description: '',
      coursework: []
    },
    {
      degree: '10th Grade',
      institution: 'Little Flower Matriculation Hr Sec School',
      period: '2022',
      gpa: '83%',
      description: '',
      coursework: []
    }
  ];

  const certifications = [
    {
      title: 'Blockchain and its application',
      issuer: 'Nptel',
      date: '2025',
      icon: '📜'
    },
    {
      title: 'Python for Data Science',
      issuer: 'Nptel',
      date: '2023',
      icon: '🏅'
    },
    {
      title: 'Data Science For Engineers',
      issuer: 'Nptel',
      date: '2023',
      icon: '🎖️'
    },
    {
      title: 'Completion of C Training',
      issuer: 'Spoken Tutorial',
      date: '2023',
      icon: '🏆'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Continuous learning and academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-600 text-sm">{edu.period}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-slate-700">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">Key Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-teal-600 font-medium text-sm">{cert.issuer}</p>
                      <p className="text-slate-500 text-sm mt-1">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-2">Continuous Learning</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Always staying updated with the latest developments in AI and machine learning through 
                research papers, online courses, and community participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};