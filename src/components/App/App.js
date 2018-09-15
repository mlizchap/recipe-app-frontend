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
                                    <Route path="/new" render={(props) => 
                                        <RecipeForm 
                                            handleSubmit={context.handleSubmit} 
                                            {...props}
                                        />} 
                                    />
                                    <Route path="/edit/:id" render={(props) => (
                                        <RecipeForm 
                                            handleSubmit={context.handleEdit} 
                                            defaultValues={context.state.recipes[props.match.params.id]}
                                            {...props}
                                        />
                                    )} />
                                    <Route path="/recipe/:id" render={(props) => 
                                        <RecipeDetail 
                                            handleDelete={context.handleDelete}
                                            handleEdit={context.handleEdit}
                                            recipe={context.state.recipes[props.match.params.id]} 
                                            {...props}/>} 
                                        />
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