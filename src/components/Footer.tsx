import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Madhavi</h3>
            <p className="text-gray-400">
              Computer Engineering Student<br />
              Web developer
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Mpawar06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/madhavi-pawar-51492b32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="madhavippawar2004@gmail.com" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Madhavi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;