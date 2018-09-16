import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { DataContext } from '../../DataProvider/DataProvider';
import Header from '../Header/Header';
import RecipeList from '../RecipeList/RecipeList';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import RecipeForm from '../RecipeForm/RecipeForm';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header />              
            <div className="app-component">
                        
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
            </div>
        );
    }
}

export default App;