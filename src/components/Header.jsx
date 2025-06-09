import { useState } from 'react';
import nssLogo from '../assets/nss-logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-6 bg-gray-800 w-full sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={nssLogo} alt="NSS IIT Bombay Logo" className="h-14" />
          <h1 className="ml-4 text-2xl font-bold">NSS CSVTU</h1>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 absolute md:static top-20 left-0 right-0 bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-6 md:p-0">
            <a href="#" className="text-lg hover:text-blue-400">Home</a>
            <a href="#" className="text-lg hover:text-blue-400">About</a>
            <a href="#" className="text-lg hover:text-blue-400">Reach</a>
            <a href="#" className="text-lg hover:text-blue-400">Initiatives</a>
            <a href="#" className="text-lg hover:text-blue-400">Departments</a>
            <a href="#" className="text-lg hover:text-blue-400">Collaborations</a>
          </div>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-lg">Login</button>
          <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-gray-700 text-lg">Contact Us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;