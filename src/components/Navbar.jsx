import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🎬 MoviePromo</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/movies" className="hover:text-yellow-400">Movies</Link>
        <Link to="/blogs" className="hover:text-yellow-400">Blogs</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;