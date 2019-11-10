import React from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import Home from './views/home/home';
import { Route } from 'react-router-dom';
import NewRecipe from './views/newRecipe/newRecipe';

function App() {
	return (
		<div className="App">
			<Nav />
			<Route exact path="/" component={Home} />
			<Route exact path="/new" component={NewRecipe}/>
		</div>
	);
}

export default App;
