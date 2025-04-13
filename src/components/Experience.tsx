import React from 'react';

const experiences = [
  {
    title: 'Sumago Infotech Intern',
    role: 'Intern',
    period: '2023 - Present',
    description: 'Learned basic fundamentals of programming languages',
  },
  
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Achievements</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600"></div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <span>{exp.role}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;