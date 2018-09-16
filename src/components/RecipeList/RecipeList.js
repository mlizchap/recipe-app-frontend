import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import './RecipeList.scss';

class RecipeList extends Component {
    render() {
        
       return (
           <div>
               <div className="recipe-list-component__addBtn"><Link to="/recipe-app-frontend/new"> ADD NEW RECIPE</Link></div>
            <div className="recipe-list-component">
                
                    { _.map(this.props.recipes, (r => {
                        return (
                            <div className="list-item">
                                <Link to={`/recipe-app-frontend/recipe/${r._id}`} key={r._id} >
                                    <img src={r.image} width="300px" />
                                    <div className="list-item__title" className="recipe-list-component__item">
                                        {r.title}
                                    </div>
                                </Link>
                            </div>
                        )})
                    )}
                </div>
            </div>
       ) 
            
       
    }
}

export default RecipeList;