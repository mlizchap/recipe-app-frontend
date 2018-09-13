import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleInput: '',
            imageInput: '',
            ingredientInput: [{name: '', amount: ''}],
            descriptionInput: '',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleInputChange = (e, index) => {
        const copy = [...this.state.ingredientInput]
        copy[index][e.target.name] = e.target.value;
        this.setState({ ingredientInput: copy })
    }
    addIngredient = (e) => {
        e.preventDefault();
        this.setState({ ingredientInput: [...this.state.ingredientInput, {name: '', amount: ''}]})
    }
    removeIngredient = (e, i) => {
        e.preventDefault();
        const ingredients = this.state.ingredientInput.filter(elem => elem.name !== i.name);
        this.setState({ ingredientInput: ingredients });
    }
    render() {
        
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <div>title: 
                    <input  
                        name="titleInput" 
                        defaultValue={this.props.defaultValues.title || this.state.titleInput} 
                        onChange={this.handleChange} />
                </div>
                <div>image:
                    <input 
                        name="imageInput" 
                        defaultValue={this.state.imageInput} 
                        onChange={this.handleChange} />
                </div>
                <div>Ingredients:
                    {(this.props.defaultValues.ingredients || this.state.ingredientInput).map((i, index) => {
                        return (
                            <div key={index}>
                                <input name="name" defaultValue={i.name} onChange={(e) => this.handleInputChange(e, index)} />
                                <input name="amount" defaultValue={i.amount} onChange={(e) => this.handleInputChange(e, index)} />
                                <button onClick={this.addIngredient}>+</button>
                                {(this.state.ingredientInput.length > 1) ?  
                                    <button onClick={(e) =>this.removeIngredient(e, i)}>-</button> 
                                    : null 
                                }
                            </div>
                        )
                    })}
                </div>
                <div>description:
                    <input 
                        name="descriptionInput" 
                        defaultValue={this.state.descriptionInput} 
                        onChange={this.handleChange} />
                </div>
                <button onClick={() => console.log(this.state.titleInput)} type="submit">SUBMIT</button>
            </form>
        )
    }
}

RecipeForm.defaultProps = {
    defaultValues: {
        titleInput: '',
        imageInput: '',
        ingredientInput: [{name: '', amount: ''}],
        descriptionInput: '',
    }
}


export default RecipeForm;