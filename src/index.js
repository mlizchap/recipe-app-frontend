import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import DataProvider from './components/DataProvider/DataProvider';
import App from './components/App/App'
import './globalStyle.scss';

ReactDOM.render(
    <Router>
        <DataProvider>
            <App />
        </DataProvider>
    </Router>, 
    document.getElementById('root')
)
