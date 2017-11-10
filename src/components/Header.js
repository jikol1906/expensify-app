import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/create" activeClassName="is-active" > Go to create page </NavLink>
        <NavLink to="/" activeClassName="is-active" exact={true}> Go to dashboard </NavLink>
    </header>
);

export default Header;