import React, { Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

export const DataContext = React.createContext();
const baseURL = 'https://arcane-lowlands-94627.herokuapp.com/api';

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipes: {}
         }
    }
    componentDidMount() {
        axios.get(`${baseURL}`)
            .then(res => {
                const recipeHashMap = _.mapKeys(res.data, '_id')
                this.setState({ recipes: recipeHashMap })
            })
    }
    // function for adding data
    addData = (e, values) => {
        e.preventDefault();
        axios.post(`${baseURL}/new`, values)
    }
    // function for deleting data

    // function for editing data

    render() {
        return (
            <DataContext.Provider value={{
                state: this.state,
                handleSubmit: this.addData
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataProvider;
