import { useEffect, useState } from 'react';
import MovieForm from '../components/MovieForm';

function MoviePage(apiUrl) {
  const [movies, setMovies] = useState([]);
  const [isMovieSubmitted, setIsMovieSubmitted] = useState(false)

  useEffect(() => {
    fetch(`${apiUrl}/movie`)
      .then(res => res.json())
      .then(res => setMovies(res.data));
    setIsMovieSubmitted(false)
  }, [isMovieSubmitted]);

  const handleCreateMovie = async ({ title, description, runtimeMins }) => {
    const res = await fetch(`${apiUrl}/movie`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, runtimeMins })
    });
    setIsMovieSubmitted(true);
  }

  return (
    <div className="App">

      <h1>Create a movie</h1>
      <MovieForm handleSubmit={handleCreateMovie} />

      <h1>Movie list</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Description: {movie.description}</p>
              <p>Runtime: {movie.runtimeMins}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MoviePage;