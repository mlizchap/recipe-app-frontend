import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NewRecipe from '../NewRecipe/NewRecipe';
import RecipeList from '../RecipeList/RecipeList';
import { RecipeDetail, RecipeDetailData } from '../RecipeDetail/RecipeDetail';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe App</h2>
                <Switch>
                    <Route path="/new" component={NewRecipe} />
                    <Route path="/recipe/:name" component={RecipeDetailData} />
                    <Route path="/" component={RecipeList} />
                </Switch>
            </div>
        );
    }
}

export default App;