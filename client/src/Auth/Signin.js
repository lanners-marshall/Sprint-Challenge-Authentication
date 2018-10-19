import React from 'react';
import axios from 'axios';
import { Contain, FlexForm, MainH1, BTN, BTNDiv } from './css';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
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
 		axios.post('http://localhost:3300/api/login', this.state)
 		.then(response => {
 			console.log(response.data)
 			localStorage.setItem('jwt', response.data.token);
 			this.props.history.push('/jokes')
 		})
 		.catch(error => {
 			console.log(error.response.data)
 		})
 	}

	render() {
		return (
			<div>
				<MainH1>Welcome User Sign in</MainH1>
				<Contain>	
					<FlexForm>
						<input
							type="text"
							placeholder='username'
							onChange={this.handleChange}
							name="username"
							value={this.state.username}
						/>
						<input
							type="password"
							placeholder='password'
							onChange={this.handleChange}
							name="password"
							value={this.state.password}
						/>
						<BTN onClick={this.submit}>SignIn</BTN>
					</FlexForm>
				</Contain>
				<Link to='/signup'><BTNDiv><BTN>Not Registered? Click here to Sign Up</BTN></BTNDiv></Link>
			</div>
		)
	}
}

export default Signin;
