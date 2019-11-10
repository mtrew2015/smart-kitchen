import React from 'react';
import './nav.scss';
import {Link} from 'react-router-dom'

function Nav() {
	return (
        <div className="nav-container">
		<nav className="nav">
			<Link to="/">Home</Link>
			<a>Recipes</a>
			<a>Contact Us</a>
			<a>Sign In</a>
			<Link to="/new">Add New Recipe</Link>
		</nav>
        <h1>Smart Kitchen Recipes</h1>
        </div>
	);
}

export default Nav;