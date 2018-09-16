import React, { Component } from 'react';

import './IngredientsField.scss';

class IngredientsField extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ingredients: [{ name: '', amount: ''}]
         };
    }
    componentDidMount() {
        if (this.props.defaultValues.ingredients) {
            this.setState({ ingredients: this.props.defaultValues.ingredients });
        }
    }
    addIngredient = () => {
        this.setState({ ingredients: [...this.state.ingredients, {name: '', amount: ''}]})
    }
    removeIngredient = (name) => {
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
            <div className="ingredients-field">
            <label>Ingredients:</label>
                {this.state.ingredients.map((i, index) => {
                    return (
                        <div key={index}>
                            <input 
                                name="amount" 
                                autocomplete="off"
                                value={i.amount} 
                                onChange={(e) => this.handleLocalInputChange(e, index)} 
                                placeholder="amount"
                            />
                            <input 
                                name="name" 
                                autocomplete="off"
                                value={i.name} 
                                onChange={(e) => this.handleLocalInputChange(e,index)} 
                                placeholder="ingredient name"
                            />
                            <div className="ingredients-field__deleteBtn" onClick={() =>this.removeIngredient(i.name)}>-</div> 
                        </div>
                    )
                })}
                <div className="ingredients-field__addBtn" onClick={() => this.addIngredient()}>ADD INGREDIENT</div>
            </div>
        );
    }
}

export default IngredientsField;