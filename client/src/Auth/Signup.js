import React from 'react';
import axios from 'axios';
import { Contain, FlexForm, MainH1, BTN, BTNDiv } from './css';
import { Link } from 'react-router-dom';

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
 			this.props.history.push('/jokes')
 		})
 		.catch(error => {
 			console.log(error.response.data)
 		})
 	}

	render() {
		return (
			<div>
				<MainH1>Welcome User Sign Up</MainH1>
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
						<BTN onClick={this.submit}>SignUp</BTN>
					</FlexForm>
				</Contain>
				<Link to='/'><BTNDiv><BTN>Need to go back click here!</BTN></BTNDiv></Link>
			</div>
		)
	}
}

export default Signup;
