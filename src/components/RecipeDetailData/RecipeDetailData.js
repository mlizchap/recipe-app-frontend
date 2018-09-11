import React, { Component } from 'react';

import { DataContext } from '../DataProvider/DataProvider';
import RecipeDetail from '../RecipeDetail/RecipeDetail';

class RecipeDetailData extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.match.params.name}</h2>
                <DataContext.Consumer>
                    {context => {
                        if (context.state.recipes.length > 0) {
                            return <RecipeDetail context={context} urlName={this.props.match.params.name}/>
                        } 
                    }}
                </DataContext.Consumer>
            </div>
        );
    }
}

export default RecipeDetailData;