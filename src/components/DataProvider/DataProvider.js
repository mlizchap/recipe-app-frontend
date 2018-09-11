import React, { Component } from 'react';
import axios from 'axios';

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
                handleSubmitNew: () => {
                    console.log(this.state.inputValues)
                },
                addIngredient: (e, i) => {
                    e.preventDefault();
                    console.log(this.state.inputValues.ingredients)
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataProvider;