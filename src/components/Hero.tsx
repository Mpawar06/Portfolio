import React from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Madhavi_Resume.pdf'; 
    link.download = 'Madhavi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    window.location.href = 'mailto:madhavippawar2004@gmail.com';
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#8b5cf6_0.5px,transparent_0.5px)] bg-[length:16px_16px] opacity-20"></div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm Madhavi 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A Computer Engineering student passionate about building innovative web solutions
          and exploring the frontiers of machine learning.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </button>
          <button
            onClick={handleContact}
            className="flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <Mail size={20} />
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;