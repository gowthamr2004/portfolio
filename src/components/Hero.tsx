import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "AI & Data Science Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Gowtham</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-slate-600 font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer with expertise in Java and a passion for AI/ML.
Skilled in building scalable web applications with intelligent features.
Hands-on experience in deep learning, data analysis, and backend systems.
Driven to solve real-world problems through innovative tech solutions.


          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <a
    href="\Gowtham R Resume (3).pdf"
    download
    className="flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
  >
    <Download className="h-5 w-5" />
    Download Resume
  </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/gowthamr2004', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/gowtham-r-b36125258', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=gowthamraji0411@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-slate-600 hover:text-blue-600"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      >
        <ChevronDown className="h-6 w-6 text-slate-600" />
      </button>
    </section>
  );
};