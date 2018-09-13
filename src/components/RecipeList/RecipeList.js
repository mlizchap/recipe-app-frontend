import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeList extends Component {
    render() {
        return (
            <div>
                {this.props.recipes.map(i => {
                    return (
                        <div key={i._id}>
                            <button onClick={() => this.props.getCurrent(i._id)}>
                            <Link to={`/recipe/${i._id}`}>{i.title}</Link>
                            </button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default RecipeList;