import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
//import history from './history';

export const DataContext = React.createContext();

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipes: [],
            inputValues: {
                title: '',
                picture: '',
                ingredients: [{ name: '', amount: ''}],
                description: ''
            },
            currentRecipe: {}
        };
    }
    componentDidMount() {
        axios.get('https://arcane-lowlands-94627.herokuapp.com/api')
            .then(res => this.setState({ recipes: res.data }))
    }
    render() {
        return (
            <DataContext.Provider value={{
                state: this.state,
                handleInputChange: (name, input) => {
                    if (name === "name" || name === "amount") {
                        const copy = {...this.state.inputValues}
                        copy.ingredients[0][name] = input;
                    } else {
                        let inputValues = {...this.state.inputValues, [name]: input}
                        this.setState({ inputValues: inputValues });
                    }
                }, 
                handleSubmitNew: (e) => {
                    e.preventDefault();
                    console.log("submit")
                    this.props.history.push('/');
                    this.setState({ recipes: [...this.state.recipes, this.state.inputValues] }, () => {
                        axios.post('https://arcane-lowlands-94627.herokuapp.com/api/new', this.state.recipes)
                        .catch(err => console.log(err))
                    })
                },
                addIngredient: (e, i) => {
                    e.preventDefault();
                    const copy = {...this.state.inputValues}
                    copy.ingredients = [...copy.ingredients, i]
                    this.setState({ inputValues: copy })
                },
                deleteRecipe: (id) => {
                    console.log(id)
                    this.setState({ recipes: this.state.recipes.filter(r => r._id !== id)}, () => {
                        axios.delete(`https://arcane-lowlands-94627.herokuapp.com/api/${id}`)
                    })
                },
                makeCurrent: (id) => {
                    const currentRecipe = this.state.recipes.filter(r => r._id === id);
                    console.log(currentRecipe);
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default withRouter(DataProvider);