import React, { Component } from 'react';

class IngredientsField extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ingredients: [{ name: '', amount: ''}]
         };
    }
    componentDidMount() {
        if (this.props.defaultValues.ingredients) {
            console.log(this.props.defaultValues.ingredients)
            this.setState({ ingredients: this.props.defaultValues.ingredients });
        }
    }
    addIngredient = (e) => {
        e.preventDefault();
        this.setState({ ingredients: [...this.state.ingredients, {name: '', amount: ''}]})
    }
    removeIngredient = (e, name) => {
        e.preventDefault();
        if (this.state.ingredients.length > 1) {
            let ingredients = [...this.state.ingredients]
            ingredients = this.state.ingredients.filter(elem => elem.name !== name)
            this.setState({ ingredients: ingredients });
        }
    }
    handleLocalInputChange = (e, index) => {
        const copy = [...this.state.ingredients]
        copy[index][e.target.name] = e.target.value;
        this.setState({ ingredients: copy }, this.props.handleInputChangeOnForm(this.state.ingredients))
    } 
    render() {
        return (
            <div>Ingredients:
                {this.state.ingredients.map((i, index) => {
                    return (
                        <div key={index}>
                            <input 
                                name="name" 
                                // defaultValue={this.props.defaultValues.ingredients[index]["name"]} 
                                value={i.name} 
                                onChange={(e) => this.handleLocalInputChange(e,index)} 
                            />
                            <input 
                                name="amount" 
                                // defaultValue={this.props.defaultValues.ingredients[index]["amount"]} 
                                value={i.amount} 
                                onChange={(e) => this.handleLocalInputChange(e, index)} 
                            />
                            <button onClick={(e) =>this.removeIngredient(e, i.name)}>-</button> 
                        </div>
                    )
                })}
                <button onClick={(e) => this.addIngredient(e)}>ADD INGREDIENT</button>
            </div>
        );
    }
}

export default IngredientsField;