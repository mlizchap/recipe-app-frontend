import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeForm from '../RecipeForm/RecipeForm';
// import RecipeList from '../RecipeList/RecipeList';
// import RecipeDetailData from '../RecipeDetailData/RecipeDetailData';
// import { DataContext } from '../DataProvider/DataProvider';

const fakeData = {
    recipes: [{
        title: 'this',
        image: 'fasfsdfas',
        imgredients: [{name: 'xxx', amount: '2 cups'}, {name: 'fdasf', amount: '435'}],
        description: 'that',
    }],
    userInput: {
        title: 'this',
        image: 'fasfsdfas',
        ingredients: [{name: 'xxx', amount: '2 cups'}, {name: 'fdasf', amount: '435'}],
        description: 'that',
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe App</h2>
                    <Switch>
                        <Route path="/form" render={() => <RecipeForm userInput={fakeData.userInput} handleChange={() => console.log('text')}/>} />
                        <Route path="/" render={() => <div>test</div>} />
                    </Switch>
            </div>
        );
    }
}

export default App;