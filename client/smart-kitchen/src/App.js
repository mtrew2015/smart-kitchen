import React from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import Home from './views/home/home';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Nav />
			<Route path exact="/" component={Home} />
		</div>
	);
}

export default App;
