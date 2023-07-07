import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCards from "./MovieCards";



export default function App () {

    const API_url = "https://www.omdbapi.com?apikey=cb0c7f0f";

    const [movieObjects, setMovieObjects] = useState([])


    useEffect(() => {

      const fetchMovies = async (title) => {
        const res = await fetch(`${API_url}&s=${title}`);
        const data = await res.json();

        const movieList = data.Search;
        console.log(movieList)
        setMovieObjects(movieList);
      }

      fetchMovies("batman")  //Gotta callback cuz using Async Await 

    }, [])


  return (
  
      <div className="app">

        <h1>Movie Land</h1>

        <div className="search">
          <input 
            placeholder="Search Movie Name"
            value=""
            onChange={() => {}}>
          </input>

          <img 
            src={SearchIcon}
            alt="search"
            onClick={() => {}}>
            </img>
        </div>

        {movieObjects.length > 0 ? (
          <div className="container">
            {movieObjects.map((movies) => (<MovieCards movies={movies} key={movies.imdbID} />))}
          </div>) :(
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
          )}

      </div>

    
  )

}
