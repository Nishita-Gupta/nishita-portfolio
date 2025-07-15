import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Experience", link: "#experience" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-purple-700">
          Nishita <span className="block md:inline">Gupta</span>
        </h1>

        
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-purple-600">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 text-center space-y-2 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b border-gray-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

