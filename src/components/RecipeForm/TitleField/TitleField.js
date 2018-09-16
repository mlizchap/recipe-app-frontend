import React, { Component } from 'react';

const TitleField = (props) => {
    return (
        <div>{props.label}: 
            <input  
                name={props.label}
                defaultValue={props.defaultValues[props.label]} 
                onChange={props.handleChange} 
            />
        </div>
    )
}

export default TitleField;

