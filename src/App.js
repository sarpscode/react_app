import {useEffect, useState} from "react";

import MovieCard from "./MovieCard";

import "./App.css"

import searchIcon from "./search.svg"

// 4e403328

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4e403328";
const movie = {
    Title: "Superman, Spiderman or Batman",
    Type: "movie",
    Year: "2011",
    imdbID: "tt2084949"
    }

function App (){
    const [searchTerm, setSearchTerm] = useState("")

    const [movies, setMovies] = useState([]);

    const  searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search);
    }
 
    useEffect(() => {
        searchMovies("Spiderman")}, []);



    return(
        
        <div className="app">
            <h1>Bongo MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value= {searchTerm}
                    onChange= {(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src= {searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        { movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                  <div className="empty">
                      <h2>No Movies Fund</h2>
                  </div>
                )}
        </div>
    );
}


export default App;