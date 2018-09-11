import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeForm from '../RecipeForm/RecipeForm';
import RecipeList from '../RecipeList/RecipeList';
import RecipeDetailData from '../RecipeDetailData/RecipeDetailData';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe App</h2>
                <Switch>
                    <Route path="/form" render={ () => <RecipeForm title="" image="" ingredients={ [{name: "", amount: ""}] } description="" /> } />
                    <Route path="/recipe/:name" component={RecipeDetailData} />
                    <Route path="/" component={RecipeList} />
                </Switch>
            </div>
        );
    }
}

export default App;