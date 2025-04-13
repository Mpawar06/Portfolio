import React from 'react';
import { Code2, Database, Github as Git, Globe, Layout, Server, Brain, FileJson, CodeIcon } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', icon: Layout, level: 90 },
  { name: 'JavaScript', icon: FileJson, level: 85 },
  { name: 'React.js', icon: Code2, level: 85 },
  { name: 'Node.js', icon: Server, level: 80 },
  { name: 'Git', icon: Git, level: 80 },
  { name: 'C/C++', icon:CodeIcon, level: 70 },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="w-6 h-6 text-indigo-600" />
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;