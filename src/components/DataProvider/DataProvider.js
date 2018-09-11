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
            }
        };
    }
    componentDidMount(prevProps) {
        axios.get('https://arcane-lowlands-94627.herokuapp.com/api')
            .then(res => this.setState({ recipes: res.data }))
    }
    render() {
        return (
            <DataContext.Provider value={{
                state: this.state,
                handleInputChange: (name, input, userIndex) => {
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
                    axios.post('https://arcane-lowlands-94627.herokuapp.com/api/new', { 
                        title: this.state.inputValues.title,
                        picture: this.state.inputValues.picture,
                        ingredients: [this.state.inputValues.ingredients],
                        description: this.state.inputValues.description
                     })
                     .then(() => this.props.history.push('/'))
                },
                addIngredient: (e, i) => {
                    e.preventDefault();
                    const copy = {...this.state.inputValues}
                    copy.ingredients = [...copy.ingredients, i]
                    this.setState({ inputValues: copy })
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default withRouter(DataProvider);