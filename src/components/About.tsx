import React from 'react';

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/image.png"
              alt="Madhavi's profile"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a Computer Engineering student at RCPIT Shirpur, currently in my Second year.
              My passion lies in web development and machine learning, where I love creating
              innovative solutions that make a difference.I'm constantly learning and growing in the tech space.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you'll find me participating in hackathons, solving
              complex problems, or exploring new technologies. I believe in the power of
              technology to transform lives and am excited to be part of this journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;