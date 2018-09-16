import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TitleField from './TitleField/TitleField';
import ImageField from './ImageField/ImageField';
import IngredientsField from './IngredientsField/IngredientsField';
import DirectionsField from './DirectionsField/DirectionsField';
import './RecipeForm.scss';

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
            <div className="form-component" >
            <h2>New Recipe Form</h2>
            <form onSubmit={(e) => {this.props.handleSubmit(e, this.state, this.props.match.params.id)}}>
                <TitleField label="title" handleChange={this.handleChange} {...this.props} />
                <ImageField label="image" imageToEdit={this.state.image} handlePictureUpload={this.handlePictureUpload} />
                <IngredientsField handleInputChangeOnForm={this.handleIngredientInputChange} {...this.props}/>
                <DirectionsField label="directions" handleChange={this.handleChange} {...this.props}/>
                <div className="form-component__buttons">
                    <button className="form-component__submitBtn" type="submit">SAVE</button>
                    <Link to="/"><button className="form-component__cancelBtn">CANCEL</button></Link>
                </div>
            </form>
            </div>
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