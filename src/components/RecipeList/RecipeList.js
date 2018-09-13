import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class RecipeList extends Component {
    render() {
        
       return (
           <div>
               <div><Link to="/new">ADD NEW</Link></div>
                { _.map(this.props.recipes, (r => {
                    return (
                        <Link to={`/recipe/${r._id}`} key={r._id}><div >{r.title}</div></Link>
                    )})
                )}
            </div>
       ) 
            
       
    }
}

export default RecipeList;