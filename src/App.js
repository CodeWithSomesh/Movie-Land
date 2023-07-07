import {useEffect} from "react";
import './App.css';



export default function App () {

  
    const API_url = "https://www.omdbapi.com?apikey=cb0c7f0f";

    useEffect(() => {

      const fetchMovies = async () => {
        const res = await fetch(API_url);
        const data = await res.json();
      }

    })


  return (
    <main>
      Body 
    </main>
  )

}
