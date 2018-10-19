import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	// extra in case you need to reference

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	submit = event => {
 		event.preventDefault()
 		axios.post('http://localhost:3300/api/login', this.state)
 		.then(response => {
 			console.log(response.data)
 			localStorage.setItem('jwt', response.data.token);
 		})
 		.catch(error => {
 			console.log(error.response.data)
 		})
 	}

	render() {
		return (
			<div>	
				<form>
					<input
						type="text"
						placeholder='username'
						onChange={this.handleChange}
						name="username"
						value={this.state.username}
					/>
					<input
						type="text"
						placeholder='password'
						onChange={this.handleChange}
						name="password"
						value={this.state.password}
					/>
					<button onClick={this.submit}>SignIn</button>
				</form>
			</div>
		)
	}
}

export default Signin;
