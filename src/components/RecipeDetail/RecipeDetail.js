import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './RecipeDetail.scss';

class RecipeDetail extends Component {
    render() {
        return (
            <div className="recipe-detail-component">
                <h2>{this.props.recipe.title}</h2>
                <div className="recipe-detail-component__imageContainer">
                    <img src={`${this.props.recipe.image}`} width="300px"/>
                </div>
                <div className="recipe-detail-component__section1">
                    <div className="recipe-detail-component__title">Ingredients:</div>
                        {this.props.recipe.ingredients.map(i => {
                            return (
                                <div key={i.name} className="recipe-detail-component__ingredientList">- {i.amount} {i.name}</div>
                            )
                        })}
                </div>
                <div className="recipe-detail-component__section2">
                    <div className="recipe-detail-component__title">Directions:</div> 
                        <div>{this.props.recipe.directions}</div>
                </div>
                <div className="recipe-detail-component__btnSection">
                    <div className="recipe-detail-component__btnBack">
                        <Link to="/recipe-app-frontend">BACK</Link>
                    </div>
                    <div className="recipe-detail-component__btnEdit">
                        <Link to={`/recipe-app-frontend/edit/${this.props.recipe._id}`}>EDIT</Link>
                    </div>
                    <div 
                        className="recipe-detail-component__btnDelete" 
                        onClick={() => this.props.handleDelete(this.props.recipe._id)}>
                            DELETE
                    </div>
                </div>
            </div>
        )
    }
}

RecipeDetail.defaultProps = {
    recipe: {
        title: 'test',
        image: "https://res.cloudinary.com/db0oxvrdr/image/upload/v1537069927/picTest2_ochobm.jpg",
        ingredients: [{name: 'test', amount: 'test'}],
        directions: 'test',
    }
}

export default RecipeDetail;