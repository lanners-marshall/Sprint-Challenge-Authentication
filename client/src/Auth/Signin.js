import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	componentDidMount(){

	}

	// extra in case you need to reference

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

	render() {
		return (
			<div>	
				 <form>
					<input
						type="username"
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
				</form>
			</div>
		)
	}
}

export default Signin;
