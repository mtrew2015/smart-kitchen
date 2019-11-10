import React from 'react';
import Nav from '../nav/nav';
import './recipeCard.scss'

function RecipeCard() {
    return(
    <div className="recipeCard">
        <h3>Title: Mac And Cheese</h3>
        <p>Author: Michael Trew</p>
        <img src="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg"/>
        <p>Rating: 5</p>

    </div>
    
    );
}

export default RecipeCard;
