import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-3">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link to="/properties" className="hover:text-blue-400">Properties</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          </li>
        </ul>
        <div>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
