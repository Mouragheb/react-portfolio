import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md z-50 fixed w-full top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white tracking-wider">
          Moustafa Ragheb
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/projects" className="hover:text-gray-400 transition">Projects</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-center py-4 border-t border-gray-700 animate-fade-in-down">
          <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-gray-400">Home</Link>
          <Link to="/projects" onClick={toggleMenu} className="block py-2 hover:text-gray-400">Projects</Link>
          <Link to="/about" onClick={toggleMenu} className="block py-2 hover:text-gray-400">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="block py-2 hover:text-gray-400">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;