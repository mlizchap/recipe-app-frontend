import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../DataProvider/DataProvider';

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to={`/form`}>ADD NEW</Link>

                <h3>RECIPE LIST</h3>
                <DataContext.Consumer>
                    {context => context.state.recipes.map(recipe => {
                        return (
                            <div key={recipe._id}>
                                <Link to={`/recipe/${recipe.title}`}>
                                    <button onClick={context.makeCurrent(recipe._id)}>{recipe.title}</button>
                                </Link>
                            </div>
                        )
                    })}
                </DataContext.Consumer>
            </div>
        );
    }
}

export default RecipeList;