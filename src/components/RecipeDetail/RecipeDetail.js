import React, { Component } from 'react';

export class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentRecipe: {}
         };
    }
    componentDidMount() {
        const currentRecipe = this.props.context.state.recipes.filter(recipe => recipe.title === this.props.urlName)[0]
        this.setState({ currentRecipe })
    }
    render() {
        return (
            <div>
                <h3>{this.state.currentRecipe.title}</h3>
                <img src={`${this.state.currentRecipe.picture}`} />
                <div>Ingredients: 
                    <ul>
                        {(this.state.currentRecipe.ingredients) ? 
                            this.state.currentRecipe.ingredients.map(i => <li key={i._id}>{i.name} | {i.amount}</li>) : <div>loading...</div>
                        }
                    </ul>
                </div>
                <div>Directions: {this.state.currentRecipe.description}</div>
            </div>
        );
    }
}

