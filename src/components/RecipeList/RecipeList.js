import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import './RecipeList.scss';

class RecipeList extends Component {
    render() {
        
       return (
           <div className="recipe-list-component">
               <Link to="/new"> <div className="recipe-list-component__addBtn">ADD NEW RECIPE</div></Link>
                { _.map(this.props.recipes, (r => {
                    return (
                        <Link to={`/recipe/${r._id}`} key={r._id} >
                            <div className="recipe-list-component__item">
                                {r.title}
                            </div>
                        </Link>
                    )})
                )}
            </div>
       ) 
            
       
    }
}

export default RecipeList;