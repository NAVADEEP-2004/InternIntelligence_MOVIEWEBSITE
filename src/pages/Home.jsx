import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Trending Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="hover:scale-105 transition">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
            <h3 className="text-center mt-2">{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;