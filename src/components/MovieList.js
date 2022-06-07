import React from "react";

const MovieList = (props) => {
    const favouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-center flex-lg-fill mt-4 mb-4 ">
                    <img src = {movie.Poster} alt ="movie"></img>
                    {/* <div className="movie-info ">
                        <h3>{movie.Title}</h3>
                        <span>{movie.Year}</span>
                    </div> */}
                    {/* <div className="movie-over align-text-bottom">
                        <p>{movie.Title}</p>
                    </div> */}

                    <div onClick={ () => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <favouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;