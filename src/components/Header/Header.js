import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default () => {
    return (
        <div className="header-component">
            <Link to="/">Recipes</Link>
        </div>
    )
}