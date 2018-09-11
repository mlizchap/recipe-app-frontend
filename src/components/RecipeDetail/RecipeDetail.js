import React, { Component } from 'react';

class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>{this.props.match.params.name}</h2>
            </div>
        );
    }
}

export default RecipeDetail;