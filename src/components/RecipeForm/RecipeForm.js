import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleInput: 'this',
            imageInput: 'fasfsdfas',
            ingredientInput: [{name: 'xxx', amount: '2 cups'}, {name: 'fdasf', amount: '435'}],
            descriptionInput: 'that',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleInputChange = (e, index) => {
        const copy = [...this.state.ingredientInput]
        copy[index][e.target.name] = e.target.value;
        this.setState({ ingredientInput: copy })
    }
    render() {
        return (
            <form>
                <div>title<input name="titleInput" value={this.state.titleInput} onChange={this.handleChange} /></div>
                <div>image<input name="imageInput" value={this.state.imageInput} onChange={this.handleChange} /></div>
                <div>Ingredients:
                    {this.state.ingredientInput.map((i, index) => {
                        return (
                            <div key={index}>
                                <input name="name" value={i.name} onChange={(e) => this.handleInputChange(e, index)} />
                                <input name="amount" value={i.amount} onChange={(e) => this.handleInputChange(e, index)} />
                            </div>
                        )
                    })}
                    {/* {this.state.ingredientInput.map((i,index) => {
                        return (
                            <div key={i.name}>
                                <input name="name" value={i.name} onChange={(e) => this.handleInputChange(e, index)} />
                                <input name="amount" value={i.amount} onChange={(e) => this.handleInputChange(e, index)} />
                            </div>
                        )
                    })} */}


                </div>
                <div>description<input name="descriptionInput" value={this.state.descriptionInput} onChange={this.handleChange} /></div>
            </form>
        )
    }
    // handleChange = (e, key) => {
    //     const userInput = {...this.state.userInput, [key]: e.target.value}
    //     this.setState({userInput})
    // }
    // handleIngredChange = (e,key,index) => {
    //     const userInput = {...this.state.userInput}
    //     userInput[key][index] = { ...userInput[key][index],[e.target.name]: e.target.value }
    //     this.setState({userInput})
    // }
    // render() {
    //     return (
    //         <form>
    //             {Object.keys(this.state.userInput).map(key => {
    //                 var item = this.state.userInput[key];
    //                 return (Array.isArray(item)) ? 
    //                     item.map((i, index) => {
    //                         return (
    //                             <div key={i.name}>
    //                                 {(index === 0) ? <div>ingredients</div> : null}
    //                                 <input value={i.name} name="name" onChange={(e) => this.handleIngredChange(e, key, index)} />
    //                                 <input value={i.amount} name="amount" onChange={(e) => this.handleIngredChange(e, key, index)} />
    //                             </div>
    //                         )
    //                     }) : <div key={key}>{key}<input value={item} onChange={(e) => this.handleChange(e, key)} /></div>
    //             })}
    //         </form>
    //     );
    // }
}

export default RecipeForm;