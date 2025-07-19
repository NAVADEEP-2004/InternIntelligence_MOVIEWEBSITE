import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
};

export default App;