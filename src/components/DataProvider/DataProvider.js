import React, { Component } from 'react';

export const DataContext = React.createContext();

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <DataContext.Provider value={"test"}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataProvider;