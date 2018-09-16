import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TitleField from './TitleField/TitleField';
import ImageField from './ImageField/ImageField';
import IngredientsField from './IngredientsField/IngredientsField';

class RecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            ingredients: [{name: '', amount: ''}],
            directions: '',
        }
    }
    componentDidMount() {
        this.setState( this.props.defaultValues )
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleIngredientInputChange = (state) => {
        this.setState({ ingredients: state })
    }
    handlePictureUpload = (image) => {
        this.setState({ image })
    }
    render() {
        return (
            <form onSubmit={(e) => {this.props.handleSubmit(e, this.state, this.props.match.params.id)}}>
                <TitleField label="title" handleChange={this.handleChange} {...this.props} />
                <ImageField label="image" handlePictureUpload={this.handlePictureUpload}/>
                <IngredientsField handleInputChangeOnForm={this.handleIngredientInputChange} {...this.props}/>

                {/* <InputField label="title" handleChange={this.handleChange} {...this.props} />
                <InputField label="image" handleChange={this.handleChange} {...this.props} />
                <div>Ingredients:
                    {this.state.ingredients.map((i, index) => {
                        return (
                            <div key={index}>
                                <input name="name" value={i.name} onChange={(e) => this.handleInputChange(e, index)} />
                                <input name="amount" value={i.amount} onChange={(e) => this.handleInputChange(e, index)} />
                                <button onClick={(e) =>this.removeIngredient(e, i.name)}>-</button> 
                            </div>
                        )
                    })}
                </div>
                <button onClick={(e) => this.addIngredient(e)}>ADD INGREDIENT</button>
                <InputField label="description" handleChange={this.handleChange} {...this.props} /> */}
                <button type="submit">SAVE</button>
                <Link to="/">Cancel</Link>
            </form>
        )
    }
}

RecipeForm.defaultProps = {
    defaultValues: {
        title: '',
        image: '',
        ingredients: [{name: '', amount: ''}],
        directions: '',
    }
}

export default RecipeForm;