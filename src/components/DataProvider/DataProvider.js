import React, { Component } from 'react';
import axios from 'axios';

export const DataContext = React.createContext();

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipes: [],
        };
    }
    componentDidMount(prevProps) {
        axios.get('https://arcane-lowlands-94627.herokuapp.com/api')
            .then(res => this.setState({ recipes: res.data }))
    }
    render() {
        return (
            <DataContext.Provider value={{
                state: this.state,
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataProvider;