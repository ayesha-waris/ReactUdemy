import React ,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

   const fetchMoviesHandler = async () => {
     setIsLoading(true);
     const response = await fetch('https://swapi.dev/api/films');
      const data = await response.json();
      const transformedData = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText:movie.opening_crawl
        };
      });
      setMovies(transformedData) ;
      setIsLoading(false);
    
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      { !isLoading && movies.length>0 && < MoviesList movies={movies} />}
      { !isLoading && movies.length===0 && <p>Found no movies :( </p>}
      { isLoading && <p> Movies are loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
