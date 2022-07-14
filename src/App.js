import React ,{useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);
   try{
     const response = await fetch('https://httprequest-34399-default-rtdb.firebaseio.com/movies.json');
     
     if (!response.ok){
       throw new Error('Error Occured');
     }

     const data = await response.json();
   
     const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
    //  const transformedData = data.results.map(movie => {
    //    return {
    //      id: movie.episode_id,
    //      title: movie.title,
    //      releaseDate: movie.release_date,
    //      openingText:movie.opening_crawl
    //    };
    //  });
     setMovies(loadedMovies) ;
     setIsLoading(false);
   } catch (error) {
     setError(error.message);
     

   }
   setIsLoading(false);
 }, []);

 const addMovieHandler = useCallback( async (movie) => {
  const response = await fetch('https://httprequest-34399-default-rtdb.firebaseio.com/movies.json',{
    method: 'POST',
    body: JSON.stringify(movie),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  fetchMoviesHandler();
}, [fetchMoviesHandler]);

  useEffect(() => {
    fetchMoviesHandler();
    return () => {
      
    };
  }, [fetchMoviesHandler]);


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie = {addMovieHandler} />
      </section>
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
