import React from 'react';
import './App.scss';
import Nav from './components/nav/nav'
import Home from './views/home/home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
