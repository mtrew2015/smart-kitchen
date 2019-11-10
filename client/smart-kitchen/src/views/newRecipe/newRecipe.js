import React, { Component } from 'react';
import './newRecipe.scss'

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
    }
    render() {
        console.log(this.state)
        return (
            <div className="new-recipe">
                <form>
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