import React from 'react';
import './nav.scss';
import {NavLink} from 'react-router-dom'

function Nav() {
	return (
        <div className="nav-container">
		<nav className="nav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/">Recipes</NavLink>
			<NavLink to="/">Contact Us</NavLink>
			<NavLink to="/">Sign In</NavLink>
			<NavLink to="/new">Add New Recipe</NavLink>
		</nav>
        <h1>Smart Kitchen Recipes</h1>
        </div>
	);
}

export default Nav;