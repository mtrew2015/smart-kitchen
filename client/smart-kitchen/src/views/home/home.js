import React, { Component } from 'react';
import './home.scss';
import Nav from '../../components/nav/nav';
import axios from 'axios';
import RecipeCard from '../../components/recipeCard/recipeCard';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes:[]
		};
		this.reload = () => {
			this.forceUpdate()
		}
	}
	componentDidMount(){
		axios.get('http://localhost:5000/api/recipes/all')
		.then(response =>this.setState({recipes:response.data}));
	}
	render() {
		return (
			<div className="home-container">
				{this.state.recipes.map((recipe) => {
				return <RecipeCard refresh={this.refresh} key={recipe.id} data={recipe}/>
				})}
			</div>
		);
	}
}

export default Home;
