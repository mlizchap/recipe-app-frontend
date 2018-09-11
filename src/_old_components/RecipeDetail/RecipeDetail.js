import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeDetail extends Component {
    constructor(props) {
        super(props);

        
    }
    render() {
        return (
            <div>
                <h3>{this.props.context.currentRecipe.title}</h3>
                <img src={`${this.props.context.currentRecipe.picture}`} width="150px" />
                <div>Ingredients: 
                    <ul>
                        {(this.props.context.currentRecipe.ingredients) ? 
                            this.props.context.currentRecipe.ingredients.map(i => <li key={i._id}>{i.name} | {i.amount}</li>) : <div>loading...</div>
                        }
                    </ul>
                </div>
                <div>Directions: {this.props.context.currentRecipe.description}</div>
                <div>
                    <div><Link to="/">back</Link></div>
                    <div><Link to="/form">Edit</Link></div>
                    <Link to="/">
                        <button onClick={() => this.props.context.deleteRecipe(this.props.context.currentRecipe._id)}>Delete</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default RecipeDetail;