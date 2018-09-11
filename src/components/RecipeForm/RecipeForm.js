import React, { Component } from 'react';

import { DataContext } from '../DataProvider/DataProvider';

class RecipeForm extends Component {
    render() {
        return (
            <DataContext.Consumer>
                { context => {
                    return (
                        <form>
                            Title: <input defaultValue={this.props.title} onChange={(e) => context.handleInputChange("title", e.target.value)} /><br />
                            Image: <input defaultValue={this.props.image} onChange={(e) => context.handleInputChange("picture", e.target.value)}/><br />
                            <div>Ingredients:
                                {this.props.ingredients.map((i, index) => {
                                    return (
                                        <div key={i.name}>
                                            Name:<input defaultValue={i.name} onChange={(e) => context.handleInputChange("name", e.target.value, index)}/><br />
                                            Amount:<input defaultValue={i.amount} onChange={(e) => context.handleInputChange("amount", e.target.value, index)}/>
                                        </div>
                                    )
                                })}
                            </div>
                            Description: <textarea defaultValue={this.props.description} onChange={(e) => context.handleInputChange("description", e.target.value)}/>
                            <button onClick={(e) => { e.preventDefault(); context.handleSubmitNew()}}>submit</button>
                        </form>
                    )
                }}
            </DataContext.Consumer>
        );
    }
}

export default RecipeForm;