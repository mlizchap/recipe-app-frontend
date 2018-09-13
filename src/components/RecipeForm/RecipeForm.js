import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const InputField = (props) => {
    return (
        <div>{props.label}: 
            <input  
                name={props.label}
                defaultValue={props.defaultValues[props.label]} 
                onChange={props.handleChange} 
            />
        </div>
    )
}

class RecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            ingredients: [{name: '', amount: ''}],
            description: '',
        }
    }
    componentDidMount() {
        this.setState( this.props.defaultValues )
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleInputChange = (e, index) => {
        const copy = [...this.state.ingredients]
        copy[index][e.target.name] = e.target.value;
        this.setState({ ingredients: copy })
    }
    addIngredient = (e) => {
        e.preventDefault();
        this.setState({ ingredients: [...this.state.ingredients, {name: '', amount: ''}]})
    }
    removeIngredient = (e, name) => {
        e.preventDefault();
        if (this.state.ingredients.length > 1) {
            let ingredients = [...this.state.ingredients]
            ingredients = this.state.ingredients.filter((elem, elemIndex) => elem.name !== name)
            console.log(ingredients)
            this.setState({ ingredients: ingredients });
        }
    }
    render() {
        
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <InputField label="title" handleChange={this.handleChange} {...this.props} />
                <InputField label="image" handleChange={this.handleChange} {...this.props} />
                <div>Ingredients:
                    {this.state.ingredients.map((i, index) => {
                        return (
                            <div key={index}>
                                <input name="name" value={i.name} onChange={(e) => this.handleInputChange(e, index)} />
                                <input name="amount" value={i.amount} onChange={(e) => this.handleInputChange(e, index)} />
                                <button onClick={(e) =>this.removeIngredient(e, i.name)}>-</button> 
                            </div>
                        )
                    })}
                </div>
                <button onClick={(e) => this.addIngredient(e)}>ADD INGREDIENT</button>
                <InputField label="description" handleChange={this.handleChange} {...this.props} />
                <button type="submit">SUBMIT</button>
                <Link to="/">Cancel</Link>
            </form>
        )
    }
}

RecipeForm.defaultProps = {
    defaultValues: {
        title: '',
        image: '',
        ingredients: [{name: '', amount: ''}],
        description: '',
    }
}


export default RecipeForm;