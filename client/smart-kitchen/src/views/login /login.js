import React, { Component } from 'react';
import './login.scss';

class Login extends Component {
	render() {
		return (
			<div className="login-container">
				<h1>Login</h1>
				<form>
					<input placeholder="User Name" />
					<input placeholder="Password" />
                    <button>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
