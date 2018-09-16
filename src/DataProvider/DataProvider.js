import React, { Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import {withRouter} from 'react-router-dom';


export const DataContext = React.createContext();
const baseURL = 'https://arcane-lowlands-94627.herokuapp.com/api';

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipes: {},
         }
    }
    componentDidMount() {
        axios.get(`${baseURL}`)
            .then(res => {
                const recipeHashMap = _.mapKeys(res.data, '_id')
                this.setState({ recipes: recipeHashMap })
            })
    }
    addData = (e, values, id) => {
        e.preventDefault();
        console.log("new");
        axios.post(`${baseURL}/new`, values)
            .then(() => axios.get(`${baseURL}`))
            .then((res) => this.handleRedirect(res));
    }

    deleteData = (id) => {
        axios.delete(`${baseURL}/${id}`)
            .then((res) => this.handleRedirect(res));
    }

    editData = (e, values, id) => {
        e.preventDefault();
        console.log("EDIT");
        axios.put(`${baseURL}/${id}`, values)
            .then((res) => this.handleRedirect(res));
    }

    handleRedirect = (res) => {
        if (res.status === 200) {
            window.location.href = `http://localhost:3000`
        }
    }
    render() {
        return (
            <DataContext.Provider value={{
                state: this.state,
                handleSubmit: this.addData,
                handleDelete: this.deleteData,
                handleEdit: this.editData
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default withRouter(DataProvider);
