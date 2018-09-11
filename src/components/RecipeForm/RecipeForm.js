import React, { Component } from 'react';

class RecipeForm extends Component {
    render() {
        return (
            <form>
                Title: <input defaultValue={this.props.title} /><br />
                Image: <input defaultValue={this.props.image} /><br />
                <div>Ingredients:
                    {this.props.ingredients.map(i => {
                        return (
                            <div key={i.name}>
                                Name:<input defaultValue={i.name} /><br />
                                Amount:<input defaultValue={i.amount} />
                            </div>
                        )
                    })}
                </div>
                Description: <textarea defaultValue={this.props.description} />
            </form>
        );
    }
}

export default RecipeForm;