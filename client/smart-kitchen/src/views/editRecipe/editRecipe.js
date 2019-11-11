import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './editRecipe.scss';

class EditRecipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			imageLink: '',
            category: '',
            id:'',
            steps: '',
		};
		this.changeHandler = (e) => {
			this.setState({ [e.target.name]: e.target.value });
		};
		this.onSubmit = (event) => {
			event.preventDefault();
			let recipe = this.state;
			axios
				.put(`http://localhost:5000/api/recipes/update/${this.props.match.params.id}`, recipe)
				.then(this.props.history.push('/'))
                .catch((err) => console.log(err));
            this.props.history.push(`/recipes/${this.props.match.params.id}`)
        };
    }
    componentDidMount() {
        axios
        .get(`http://localhost:5000/api/recipes/${this.props.match.params.id}`)
        .then(response => this.setState({
            title: response.data[0].title, 
            author:response.data[0].author,
            imageLink:response.data[0].imageLink,
            category:response.data[0].category,
            id:response.data[0].id,
            steps: response.data[0].steps

        }))
	}
	render() {
        console.log(this.state, 'state object')
		return (
			<div className="edit-recipe">
				<h1>Edit Recipe</h1>
				<form className="edit-recipe-form" onSubmit={this.onSubmit}>
					<p>Title</p><input onChange={this.changeHandler} name="title" value={this.state.title} />
					<p>Author</p><input onChange={this.changeHandler} name="author" value={this.state.author} />
					<p>Image Link</p><input onChange={this.changeHandler} name="imageLink" value={this.state.imageLink} />
					<p>Category</p><input onChange={this.changeHandler} name="category" value={this.state.category} />
					<p>Steps:</p><textarea onChange={this.changeHandler} name="steps" value={this.state.steps}/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default (withRouter)(EditRecipe);
