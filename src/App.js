import React ,{useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);
   try{
     const response = await fetch('https://swapi.dev/api/films');
     
     if (!response.ok){
       throw new Error('Error Occured');
     }

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
   } catch (error) {
     setError(error.message);
     

   }
   setIsLoading(false);
 }, []);

  useEffect(() => {
    fetchMoviesHandler();
    return () => {
      
    };
  }, [fetchMoviesHandler]);


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      { !isLoading && movies.length>0 && < MoviesList movies={movies} />}
      { !isLoading && movies.length===0 && !error && <p>Found no movies :( </p>}
      { isLoading && <p> Movies are loading...</p>}
      { !isLoading && error && <p> {error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
