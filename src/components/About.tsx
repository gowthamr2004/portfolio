import React from 'react';
import { Brain, Code, TrendingUp, Users } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI Research',
      description: 'Deep learning, neural networks, and cutting-edge AI research'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern frameworks and tools'
    },
    {
      icon: TrendingUp,
      title: 'Data Analysis',
      description: 'Statistical analysis, data visualization, and predictive modeling'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Team player with strong communication and leadership skills'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Driven by curiosity and powered by data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I am an enthusiastic AI and Data Science student with a passion for solving real-world problems through intelligent systems.
               My interest in machine learning and data-driven decision-making led me to pursue a B.Tech in AI & DS, where I’ve gained a strong foundation in Python, Java, and data analysis.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              I’ve worked on impactful projects such as AI Specs for the Blind and an Autonomous Drone for Flood Rescue, applying deep learning and computer vision. 
              My internships as a Web and Frontend Developer helped me build practical skills in full-stack development using React, Bootstrap, and JavaScript.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Alongside academics, I actively participate in competitions and community work—earning recognition as a Smart India Hackathon semifinalist and Internmela winner. 
              I enjoy exploring new AI tools, reading research papers, and mentoring peers on their learning paths.
            </p>

            <div className="pt-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Let's Connect
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors duration-300 group"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};