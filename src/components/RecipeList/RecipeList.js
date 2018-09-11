import React, { Component } from 'react';

class RecipeList extends Component {
    render() {
        return (
            <div>
                {this.props.recipes.map(i => {
                    return <div>{i.title}</div>
                })}
            </div>
        );
    }
}

export default RecipeList;