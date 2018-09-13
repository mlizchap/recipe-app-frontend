import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    render() {
        return (
            <div>
                <h2>{this.props.recipe.title}</h2>
                <h3>Ingredients:</h3>
                    {this.props.recipe.ingredients.map(i => {
                        return (
                            <div key={i.name}>{i.name} | {i.amount}</div>
                        )
                    })}
                <div>directions: {this.props.recipe.description}</div>
            </div>
        )
        
        
        
        //console.log(this.props)

        // const recipe = this.props.recipes.filter(i => i._id == this.props.match.params.id)[0];
        // return (
        //     <div>
        //         {console.log(recipe)}
        //         <h2>{recipe.title}</h2>
        //         <ul>Ingredients:
        //             {recipe.ingredients.map(i => {
        //                 return (
        //                     <div key={i.name}>
        //                         <li>{i.name} | {i.amount}</li>
        //                     </div>
        //                 )
        //             })}
        //         </ul>
        //         <div>Directions:{recipe.description}</div>
        //         <div>
        //             <Link to="/">Back</Link>
        //             <Link to={`/edit/${recipe._id}`}>Edit</Link>
        //         </div>
        //     </div>  
        //);
    }
}

export default RecipeDetail;