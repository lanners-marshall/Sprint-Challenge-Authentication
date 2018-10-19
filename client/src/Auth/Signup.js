import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	submit = event => {
 		event.preventDefault()
 		axios.post('http://localhost:3300/api/register', this.state)
 		.then(response => {
 			console.log(response.data.token)
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
					<button onClick={this.submit}>SignUp</button>
				</form>
			</div>
		)
	}
}

export default Signup;
