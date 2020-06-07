import React from 'react';
import Movie from './Movie/Movie';
import './Movies.css';
const Movies = (props) => {
 
    const movies = (
        props.movies.map((el) => (
            <Movie key={el.id} movie={el.movie} deleteMovie = {props.delete} id={el.id} />
        ))
    )
    return(
        <React.Fragment>
            <ul className="Movies">{movies}</ul>
        </React.Fragment>
    )
}

export default Movies;