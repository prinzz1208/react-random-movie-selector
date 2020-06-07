import React from 'react';
import './Back.css'
const Back = (props) => {
    const movie = props.randomMovie; 
    return(
        <div className="Back" onClick={props.rotateHandler}></div>
    )
}

export default Back;