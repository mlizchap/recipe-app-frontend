import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: {
                title: 'this',
                image: 'fasfsdfas',
                ingredients: [{name: 'xxx', amount: '2 cups'}, {name: 'fdasf', amount: '435'}],
                description: 'that',
            }
        }
    }
    handleChange = (e, key) => {
        console.log(key)
        console.log(this.state.userInput[key])
        const userInput = {...this.state.userInput, [key]: e.target.value}
        this.setState({userInput})
    }
    render() {
        return (
            <form>
                {Object.keys(this.state.userInput).map(key => {
                    var item = this.state.userInput[key];
                    return (Array.isArray(item)) ? 
                        item.map((i, index) => {
                            return (
                                <div key={i.name}>
                                    {(index === 0) ? <div>ingredients</div> : null}
                                    <input value={i.name} />
                                    <input value={i.amount} />
                                </div>
                            )
                        }) : <div>{key}<input value={item} onChange={(e) => this.handleChange(e, key)} /></div>
                })}
            </form>
        );
    }
}

export default RecipeForm;