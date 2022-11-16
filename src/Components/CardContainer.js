import React from "react";
import MovieCard from "./Card";
import "./CardContainer.css";
const CardContainer = ({ movies }) => {
  return (
    <div className="main-movies">
      {movies.map((movie) => (
        <MovieCard
          description={movie.description}
          title={movie.title}
          img={movie.img}
        />
      ))}
    </div>
  );
};

export default CardContainer;
