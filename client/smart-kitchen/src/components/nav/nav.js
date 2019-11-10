import React from 'react';
import './nav.scss';

function Nav() {
	return (
        <div className="nav-container">
		<nav className="nav">
			<a>Home</a>
			<a>Recipes</a>
			<a>Contact Us</a>
			<a>Sign In</a>
		</nav>
        <h1>Smart Kitchen Recipes</h1>
        </div>
	);
}

export default Nav;