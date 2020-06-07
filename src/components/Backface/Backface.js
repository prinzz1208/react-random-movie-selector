import React from 'react';
import './Backface.css';
import Back from '../Button/Back';

const Backface = (props) => {

    const classList = props.rotate ? 'Backface rotate': 'Backface'
    return(
        <div className={classList}>  
            <p>{props.movie}</p>          
            <Back rotateHandler={props.doRotate}/>    
        </div>
        
    )
}

export default Backface;