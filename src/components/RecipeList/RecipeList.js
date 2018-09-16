import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class RecipeList extends Component {
    render() {
        
       return (
           <div>
               <Link to="/new"> ADD NEW</Link>
                { _.map(this.props.recipes, (r => {
                    return (
                        <div key={r._id}><Link to={`/recipe/${r._id}`}>{r.title}</Link></div>
                    )})
                )}
            </div>
       ) 
            
       
    }
}

export default RecipeList;