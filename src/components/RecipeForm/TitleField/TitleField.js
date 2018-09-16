import React, { Component } from 'react';

import './TitleField.scss';

const TitleField = (props) => {
    return (
        <div className="title-field">
            <label>Title:</label>
            <input  
                autocomplete="off"
                name={props.label}
                defaultValue={props.defaultValues[props.label]} 
                onChange={props.handleChange} 
            />
        </div>
    )
}

export default TitleField;

