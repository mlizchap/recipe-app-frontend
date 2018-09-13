import React, { Component } from 'react';

class FormData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
    }
    formChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    render() {
        return (
            <FormRender 
                name={this.state.name} 
                age={this.state.age} 
                handleChange={this.formChange}
            />
        )
    }
}

class FormRender extends Component {
    render() {
        return (
            <form>
                Name: <input value={this.props.name} onChange={this.props.handleChange} />
                Age: <input value={this.props.age} onChange={this.props.handleChange} />
                <button type="submit" onClick={this.props.handleSubmit}>SUBMIT</button>
            </form>
        );
    }
}

export default FormRender;