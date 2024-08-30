import React from 'react';
import navbarlogo from '../assets/navbarlogo.png';

const Footer = () => {
  return (
    <>
      {/* Cool Separating Line */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-md"></div>

      <footer className="bg-black text-white py-8 px-4 relative">
        {/* Mobile Only Logo and Copyright */}
        <div className="absolute top-8 left-20 flex items-center">
          <img src={navbarlogo} alt="CodersHub Logo" className="w-24" />
        </div>

        {/* Desktop and Tablet Footer Sections */}
        <div className="hidden md:block ml-80 max-w-6xl mx-auto">
          {/* Footer Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Home Section */}
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-semibold">Home</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#home" className="hover:text-cyan-500">Content</a></li>
              </ul>
            </div>

            {/* Roadmap Section */}
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-semibold">Roadmap</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#roadmap" className="hover:text-cyan-500">Our Roadmap</a></li>
                <li><a href="#roadmap" className="hover:text-cyan-500">Resources</a></li>
              </ul>
            </div>

            {/* Community Section */}
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-semibold">Community</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#community" className="hover:text-cyan-500">Discord</a></li>
                <li><a href="#community" className="hover:text-cyan-500">Reddit</a></li>
              </ul>
            </div>

            {/* ESMOAI Section */}
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-semibold">AI </h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#esmoai" className="hover:text-cyan-500">Overview</a></li>
              </ul>
            </div>

            {/* Find Events Section */}
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-semibold">Find Events</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#findevents" className="hover:text-cyan-500">Upcoming Events</a></li>
                <li><a href="#findevents" className="hover:text-cyan-500">stay updated</a></li>
              </ul>
            </div>

            {/* About Us Section */}
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-semibold">About Us</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#aboutus" className="hover:text-cyan-500">What We Provide</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section for both Mobile and Desktop */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} 10xCoders. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
