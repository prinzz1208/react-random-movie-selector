import React from 'react';
import './Movie.css';
const Movie = (props) => {
    const icon ={
        // fontSize:"2rem"
    } 
    return(
        <li className="my-2 Movie">
            <span data-id={props.id}>{props.movie}</span>
            <i className="fa fa-trash" onClick={props.deleteMovie} aria-hidden="true"></i>
        </li>

    )
}

export default Movie;