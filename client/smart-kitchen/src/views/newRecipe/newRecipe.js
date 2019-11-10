import React, { Component } from 'react';
import './newRecipe.scss'
import axios from 'axios';

 class NewRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author:'',
            imageLink: '',
            category: '',
            steps:''
        }
        this.changeHandler = (e) => {
            this.setState({[e.target.name]: e.target.value})
        }
        this.onSubmit = (event) => {
            event.preventDefault();
            let recipe = this.state
            axios.post("http://localhost:5000/api/recipes/add", recipe)
            .then(this.props.history.push('/'))
            .then(window.location.reload())
            .catch(err => console.log(err))
        }
    }
    render() {
        console.log(this.state)
        return (
            <div className="new-recipe">
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.changeHandler} name="title" placeholder="Title"/>
                    <input onChange={this.changeHandler} name="author" placeholder="Author"/>
                    <input onChange={this.changeHandler} name="imageLink" placeholder="Image Link"/>
                    <input onChange={this.changeHandler} name="category" placeholder="Category"/>
                    <textarea placeholder="Steps"/>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default NewRecipe