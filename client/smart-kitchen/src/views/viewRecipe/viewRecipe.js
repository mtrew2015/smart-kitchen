import React, { Component } from 'react';
import './viewRecipe.scss'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';

class ViewRecipe extends Component {
	constructor(props) {
        super(props);
        this.state = {
            post:''
        }
        this.delete = (e) => {
            e.preventDefault();
            axios
            .delete(`http://localhost:5000/api/recipes/${this.props.match.params.id}`)
            .then(this.props.history.push('/'))
            .catch(err => console.log(err))
        }
    }
 
	componentDidMount() {
        axios
        .get(`http://localhost:5000/api/recipes/${this.props.match.params.id}`)
        .then(response => this.setState({post:response.data[0]}))
	}
	render() {
        console.log(this.state)
		return(
            <div className="viewRecipe">
                <h1>Title:{this.state.post.title}</h1>
                <p>Category:{this.state.post.category}</p>
                <img src={this.state.post.imageLink}/>
                <p>Steps:{this.state.post.steps}</p>
                <p>Rating:{this.state.post.rating}</p>
                <Link to="/"><button onClick={this.delete}>Delete This Recipe</button></Link>
            </div>
        );
	}
}

export default (withRouter)(ViewRecipe);
