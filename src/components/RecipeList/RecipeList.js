import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class RecipeList extends Component {
    render() {
       return  _.map(this.props.recipes, (r => 
            <Link to={`/recipe/${r._id}`} key={r._id}><div >{r.title}</div></Link>
       ))
    }
}

export default RecipeList;