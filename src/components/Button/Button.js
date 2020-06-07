import React from 'react';
import './Button.css'

const Button = (props) => {
    
    return(
            <div className="Button" onClick={props.rotateHandler}></div>
    )
}

export default Button;