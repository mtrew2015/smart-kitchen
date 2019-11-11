import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from '../nav/nav';
import './recipeCard.scss'

function RecipeCard(props) {

    console.log(props)
    
    const clickHandler = () => {
        props.history.push(`recipes/${props.data.id}`)
    }

    return(
    <div className="recipeCard" onClick={clickHandler}>
        <h3>{props.data.title}</h3>
        <p>Author: {props.data.author}</p>
        <p>Category:{props.data.category}</p>
        <img src={props.data.imageLink}/>
        <p>Rating: 5</p>

    </div>
    
    );
}

export default (withRouter)(RecipeCard);
