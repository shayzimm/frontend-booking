import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Yallambee Tiny Homes</h1>
      <p className="mb-8">Experience a tranquil stay in our cozy tiny homes.</p>
      
      {/* CTA Button */}
      <Link to="/booking">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Book Your Stay
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
