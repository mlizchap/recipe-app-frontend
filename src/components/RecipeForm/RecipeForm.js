import React, { Component } from 'react';

import { DataContext } from '../DataProvider/DataProvider';

const UserInput = (props) => {
    return (
        <DataContext.Consumer>
            {context => {
                return (
                    <div>
                        {props.name}: <input defaultValue={props.default} onChange={(e) => context.handleInputChange(`${props.name}`, e.target.value)} />
                    </div>
                )
            }}
        </DataContext.Consumer>
    )
}

UserInput.defaultProps = {
    defaultValue: ""
}

class RecipeForm extends Component {

    render() {
        return (
            <DataContext.Consumer>
                { context => {
                    return (
                        <form>
                            <UserInput name="title" />
                            <UserInput name="image" />
                            <div>Ingredients:
                                {this.props.ingredients.map((i) => {
                                    return (
                                        <div key={i.name}>
                                            <UserInput name="name" />
                                            <UserInput name="amount" />
                                            <button 
                                                onClick={(e) => context.addIngredient(e, i)}>
                                                +
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                                <UserInput name="description" />
                                <button onClick={(e) => { e.preventDefault(); context.handleSubmitNew()}}>submit</button>
                        </form>
                    )
                }}
            </DataContext.Consumer>
        );
    }
}

RecipeForm.defaultProps = {
    ingredients: [{ name: "", amount: ""}]
}

export default RecipeForm;