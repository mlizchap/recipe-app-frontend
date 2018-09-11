import React, { Component } from 'react';

import { DataContext } from '../DataProvider/DataProvider';

const UserInput = (props) => {
    return (
        <DataContext.Consumer>
            {context => {
                return (
                    <React.Fragment>
                        {props.name}: <input defaultValue={props.default} onChange={(e) => context.handleInputChange(`${props.name}`, e.target.value)} />
                    </React.Fragment>
                )
            }}
        </DataContext.Consumer>
    )
}

UserInput.defaultProps = {
    defaultValue: "x"
}

class RecipeForm extends Component {
    render() {
        return (
            <DataContext.Consumer>
                { context => {
                    return (
                        <form onSubmit={context.handleSubmitNew}>
                            <UserInput name="title" /><br />
                            <UserInput name="image" /><br />
                            <div>Ingredients:
                                {context.state.inputValues.ingredients.map((i, index) => {
                                    return (
                                        <div key={index}>
                                            <UserInput name="name" defaultValue={i.name} />
                                            <UserInput name="amount" defaultValue={i.amount} />
                                            {(context.state.inputValues.ingredients.length > 1) ? 
                                                <button>-</button> : null
                                            }
                                            {(index === context.state.inputValues.ingredients.length - 1) ?
                                                <button onClick={(e) => context.addIngredient(e, i)}>+</button> : null
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                                <UserInput name="description" />
                                <div>
                                    <button type="submit">
                                        submit    
                                    </button>
                                </div>
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