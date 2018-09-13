import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeForm1 from '../RecipeForm.1/RecipeForm';
import RecipeForm from '../RecipeForm/RecipeForm';
import RecipeList from '../RecipeList/RecipeList';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
// import RecipeDetailData from '../RecipeDetailData/RecipeDetailData';
// import { DataContext } from '../DataProvider/DataProvider';

const fakeData = {
    recipes: [
        {   
            _id: 1,
            title: 'this',
            image: 'fasfsdfas',
            ingredients: [{name: 'xxx', amount: '2 cups'}, {name: 'fdasf', amount: '435'}],
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        },
        {
            _id: 2,
            title: 'something else',
            image: 'fasfsdfas',
            ingredients: [{name: 'zzz', amount: '77 cups'}, {name: 'yyy', amount: '4000'}],
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        },
    ],
    currentRecipe: {
        id: 0
    },
    handleSubmit: (e, values) => {
        e.preventDefault()
        console.log("SUBMIT")
        console.log(values)
    },
    handleCurrent: (id) => {
        console.log(id)
        fakeData.currentRecipe.id = id;
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Recipe App</h2>
                    <Switch>
                        <Route path="/practice" render={() => <RecipeForm1 />} />

                        <Route path="/edit/:id" render={(props) => {
                            const paramID = props.match.params.id;
                            const item = fakeData.recipes.filter(i => i._id == paramID)[0]
                            return <RecipeForm itemToEdit={item} handleSubmitNew={fakeData.handleSubmit} {...props} /> 
                        }} />
                        {/* find default form value by grabbing the recipe info by its id */}
                        <Route path="/editForm/:id" render={() => {
                            return <RecipeForm handleSubmitNew={fakeData.handleSubmit} defaultValue={}/>
                        }} />
                        <Route path="/form" render={() => {
                            return <RecipeForm handleSubmitNew={fakeData.handleSubmit} />
                        }} />
                        <Route path="/recipe/:id" component={(props) => <RecipeDetail recipes={fakeData.recipes} {...props}/>} />
                        <Route path="/" render={() => <RecipeList recipes={fakeData.recipes} getCurrent={fakeData.handleCurrent}/>} />
                    </Switch>
            </div>
        );
    }
}

export default App;