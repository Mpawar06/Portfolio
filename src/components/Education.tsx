import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-full">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Engineering</h3>
              <p className="text-gray-600">R. C. Patel Institute of Technology, Shirpur</p>
            </div>
          </div>
          <div className="pl-16">
            <p className="text-gray-600 mb-2">Expected Graduation: 2027</p>
            <p className="text-gray-600">
              Relevant Coursework: Data Structures, Algorithms, Database Management,
              Web Development, Machine Learning, Computer Networks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;