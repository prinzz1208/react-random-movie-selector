import React from 'react';
import './Input.css'
const Input = (props) => {
    return(
        <form className="form-group " onSubmit={props.add}>
            <div className="input-group ">
                <input type="text" className="Input" placeholder="Enter Movie" name="movieInput"></input>
            </div>
            <input type="submit" className="btn" value="&nbsp;"/>

        </form>
    )
}

export default Input;