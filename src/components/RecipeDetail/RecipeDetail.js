import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeDetail extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.recipe.title}</h2>
                <img src={`${this.props.recipe.image}`} width="150px"/>
                <h3>Ingredients:</h3>
                    {this.props.recipe.ingredients.map(i => {
                        return (
                            <div key={i.name}>{i.name} | {i.amount}</div>
                        )
                    })}
                <div>directions: {this.props.recipe.directions}</div>

                <div>
                    <div><Link to="/">BACK</Link></div>
                    <div><Link to={`/edit/${this.props.recipe._id}`}>EDIT</Link></div>
                    <button onClick={() => this.props.handleDelete(this.props.recipe._id)}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default RecipeDetail;