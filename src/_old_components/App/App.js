import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeForm from '../RecipeForm/RecipeForm';
import RecipeList from '../RecipeList/RecipeList';
import RecipeDetailData from '../RecipeDetailData/RecipeDetailData';
import { DataContext } from '../DataProvider/DataProvider';


class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe App</h2>
                {/* <DataContext.Consumer>
                    {context => { */}
                        <Switch>
                            <Route path="/form" render={ () => <RecipeForm /> } />
                            <Route path="/editForm" render={ () => <RecipeForm /> } />
                            <Route path="/recipe/:name" component={RecipeDetailData} />
                            <Route path="/" component={RecipeList} />
                        </Switch>
                    {/* }}
                </DataContext.Consumer> */}
            </div>
        );
    }
}

export default App;