import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            picture: "",
            ingredients: [{ ingredName: '', ingredAmount: '' }],
            description: ""
         };
    }
    renderIngredInput = (e) => {
        e.preventDefault();
        //console.log(e.targat)
        this.setState({ ingredients: 
            [ ...this.state.ingredients, 
            {name: e.target.ingredientName.value, amount: e.target.ingredientAmount.value } ]
        })
    }
    handleIngredChange = (userIndex, event) => {
        const ingredients = this.state.ingredients.map((i, stateIndex) => {
            return (stateIndex === userIndex) ? { ...i, [event.target.name]: event.target.value } : i 
        })
        this.setState({ ingredients })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state.ingredients) )
    }
    render() {
        return (
            <form>
                <div>Title: <input name="title" value={this.state.title} onChange={this.handleChange} /></div>
                <div>Image: <input name="image" value={this.state.picture} onChange={this.handleChange} /></div>
                <div>Ingredients:</div>
                    {this.state.ingredients.map((i,index) => {
                        return (
                            <div key={index}>
                                Name: <input name="ingredName" value={i.name} onChange={(e) => this.handleIngredChange(index, e)}/>
                                Amount: <input name="ingredAmount" value={i.amount} onChange={(e) => this.handleIngredChange(index, e)}/>
                                <button onClick={this.renderIngredInput}>+</button>
                            </div>
                        )
                    })}
                <div>Description <textarea name="description" onChange={this.handleChange}/></div>
                <div>
                    <button>submit</button>
                    <div><Link to="/">Cancel</Link></div>
                </div>
            </form>
        );
    }
}

export default RecipeForm;