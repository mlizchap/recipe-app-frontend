import React, { Component } from 'react';

import './DirectionField.scss';

const DirectionsField = (props) => {
    return (
        <div className="directions-input">
            <label>Directions:</label>
            <textarea  
                name={props.label}
                defaultValue={props.defaultValues[props.label]} 
                onChange={props.handleChange} 
            />
        </div>
    )
}

export default DirectionsField;

