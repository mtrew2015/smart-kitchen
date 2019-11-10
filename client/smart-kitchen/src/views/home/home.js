import React, { Component } from 'react';
import './home.scss';
import Nav from '../../components/nav/nav';
import axios from 'axios';
import RecipeCard from '../../components/recipeCard/recipeCard';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div class="home-container">
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
			</div>
		);
	}
}

export default Home;
