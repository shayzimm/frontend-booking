import React from 'react';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Yallambee Tiny Homes</h1>
          <p className="text-sm">A peaceful off-grid accommodation</p>
        </div>
        <NavBar /> {/* Nested NavBar Component */}
      </div>
    </header>
  );
};

export default Header;
