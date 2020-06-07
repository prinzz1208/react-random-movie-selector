import React from 'react';
import Movie from './Movie/Movie';
const Movies = (props) => {
    const style = {
        maxWidth:'50%',
        height:'25rem',
        margin:'0 auto',
        fontSize:'1.5rem',
        overflowY:'auto',
        lineHeight:'2rem', 
        padding: '0'   
    }
    const movies = (
        props.movies.map((el) => (
            <Movie key={el.id} movie={el.movie} deleteMovie = {props.delete} id={el.id} />
        ))
    )
    return(
        <React.Fragment>
            <ul className="" style={style}>{movies}</ul>
        </React.Fragment>
    )
}

export default Movies;