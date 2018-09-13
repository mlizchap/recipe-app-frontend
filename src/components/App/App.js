import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


import RecipeList from '../RecipeList/RecipeList';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import RecipeForm from '../RecipeForm/RecipeForm';
import { DataContext } from '../DataProvider/DataProvider';


class App extends Component {
    render() {
        return (
            <div>
                <h2><Link to="/">Recipe App</Link></h2>                    
                    <DataContext.Consumer>
                        {context => {
                            return (
                                <Switch>
                                    <Route path="/new" render={() => <RecipeForm handleSubmit={context.handleSubmit}/>} />
                                    <Route path="/edit/:id" render={(props) => (
                                        <RecipeForm 
                                            handleSubmit={context.handleSubmit} 
                                            defaultValues={context.state.recipes[props.match.params.id]}
                                            {...props}
                                        />
                                    )} />
                                    <Route path="/recipe/:id" render={(props) => <RecipeDetail recipe={context.state.recipes[props.match.params.id]} {...props}/>} />
                                    <Route exact path="/" render={() => <RecipeList recipes={context.state.recipes} /> } />                           
                                </Switch> 
                            )      
                        }}
                    </DataContext.Consumer>
                                      
            </div>
        );
    }
}

export default App;