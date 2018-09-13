import React, { Component } from 'react';

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
    removeIngredient = (e, i) => {
        e.preventDefault();
        const ingredients = this.state.ingredients.filter(elem => elem.name !== i.name);
        this.setState({ ingredients: ingredients });
    }
    render() {
        
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <div>title: 
                    <input  
                        name="title" 
                        defaultValue={this.props.defaultValues.title} 
                        onChange={this.handleChange} />
                </div>
                <div>image:
                    <input 
                        name="image" 
                        defaultValue={this.props.defaultValues.image} 
                        onChange={this.handleChange} />
                </div>
                <div>Ingredients:
                    {(this.state.ingredients).map((i, index) => {
                        return (
                            <div key={index}>
                                <input name="name" defaultValue={i.name} onChange={(e) => this.handleInputChange(e, index)} />
                                <input name="amount" defaultValue={i.amount} onChange={(e) => this.handleInputChange(e, index)} />
                                <button onClick={(e) => this.addIngredient(e)}>+</button>
                                {(this.state.ingredients.length > 1) ?  
                                    <button onClick={(e) =>this.removeIngredient(e, i)}>-</button> 
                                    : null 
                                }
                            </div>
                        )
                    })}
                </div>
                <div>description:
                    <textarea 
                        name="description" 
                        defaultValue={this.props.defaultValues.description} 
                        onChange={this.handleChange} />
                </div>
                <button type="submit">SUBMIT</button>
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