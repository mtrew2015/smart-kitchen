import React from 'react';
import Nav from '../nav/nav';
import './recipeCard.scss'

function RecipeCard(props) {

    return(
    <div className="recipeCard">
        <h3>Title: {props.data.title}</h3>
        <p>Author: {props.data.author}</p>
        <p>Category:{props.data.category}</p>
        <img src={props.data.imageLink}/>
        <p>Rating: 5</p>

    </div>
    
    );
}

export default RecipeCard;
