import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Movielist from "./MovieList";
import "../App.css"
import MovieListHead from "./MovieListHeading";
import SearchBox from "./SearchBox";
import AddFavourites from "./AddFavourites";
import RemoveFavourites from "./RemoveFavourites";

const API_KEY = 'bb58beb0';

const Home = ({handleLogout}) => {
  const [movies, setMovies] = useState([]);
  const [favourites, setfavourites] = useState([]);
  const [searchmovie, setsearchmovie] = useState("");

  const getMovieRequest = async (searchmovie) => {
    //Convert into a template string by just adding Backtick on it.
    const url = ` http://www.omdbapi.com/?s=${searchmovie}&apikey=${API_KEY}`;

    const res = await fetch(url);
    const resjson = await res.json();

    if (resjson.Search) {
      setMovies(resjson.Search);
    }

    // console.log(resjson);
    // setMovies(resjson.Search);
  };

  useEffect(() => {
    getMovieRequest(searchmovie);
  }, [searchmovie]);

  // whenever we refreshes, we lost our data , 
  // we save our data to local storage 

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setfavourites(movieFavourites);
		}
	}, []);

  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

  const addFavouritemovie = (movie) => {
    const newFavouritelist = [...favourites, movie];
    setfavourites(newFavouritelist);
    saveToLocalStorage(newFavouritelist);
  };

  const removeFavouriteMovie = (movie) => {
		const newFavouritelist = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setfavourites(newFavouritelist);
    saveToLocalStorage(newFavouritelist);
	};

  return (
    <div className="container movie-app mt-4">
      <div className="row d-flex align-items-center heading ">
        <MovieListHead heading="Bucket List" />
        <SearchBox searchmovie={searchmovie} setsearchmovie={setsearchmovie} />
      </div>
        <button className="bt-1" onClick={handleLogout}>Logout</button>
      <div className="row ">
        <Movielist
          movies={movies}
          handleFavouritesClick={addFavouritemovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4 subheading">
        <MovieListHead heading="Favourites" />
      </div>
      <div className="row ">
        <Movielist
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default Home;
