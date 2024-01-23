import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Inception",
            image: "https://example.com/inception.jpg",
            director: "Christopher Nolan"
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            image: "https://example.com/shawshank_redemption.jpg",
            director: "Frank Darabont"
        },
        {
            id: 3,
            title: "The Godfather",
            image: "https://example.com/godfather.jpg",
            director: "Francis Ford Coppola"
        },
        {
            id: 4,
            title: "Pulp Fiction",
            image: "https://example.com/pulp_fiction.jpg",
            director: "Quentin Tarantino"
        },
        {
            id: 5,
            title: "The Dark Knight",
            image: "https://example.com/dark_knight.jpg",
            director: "Christopher Nolan"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard key={movie.id}
                           movie={movie}
                           onMovieClick={(newSelectedMovie) => {
                               setSelectedMovie(newSelectedMovie);
                           }}
                />
            ))}
        </div>
    );
};
