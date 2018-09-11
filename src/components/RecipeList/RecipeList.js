import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeList extends Component {
    render() {
        return (
            <div>
                {this.props.recipes.map(i => {
                    return (
                        <div key={i._id}>
                            <Link to={`/recipe/${i.title}`}>{i.title}</Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default RecipeList;