import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  const filtered = movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6">
      <input 
        type="text" 
        placeholder="Search Movies..." 
        className="p-2 mb-4 w-full text-black rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="hover:scale-105 transition">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
            <h3 className="text-center mt-2">{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;