import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            picture: "",
            ingredients: [{ name: '', amount: ''}],
            description: ""
         };
    }
    renderIngredInput = (e) => {
        e.preventDefault();

        this.setState({ ingredients: [...this.state.ingredients, {name: ''}]})
    }
    handleIngredChange = (userIndex, event) => {
        const ingredients = this.state.ingredients.map((i, stateIndex) => {
            return (stateIndex === userIndex) ? {name: event.target.value, amount: 'x'} : i 
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
                                <input name="ingredient" value={i.name} onChange={(e) => this.handleIngredChange(index, e)}/>
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