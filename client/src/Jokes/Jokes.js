import React from 'react';
import axios from 'axios';
import Joke from './Joke';
import { Contain, Logout, JList } from './css';

class Jokes extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			jokes: [],
		};
	}

	componentDidMount(){

		const token = localStorage.getItem('jwt')
		const reqOptions = {
			headers: {
				Authorization: token,
			}
		};

		axios.get('http://localhost:3300/api/jokes', reqOptions)
			.then(response => {
				console.log(response)
				this.setState({
					jokes: response.data
				})
			})
			.catch(error => {
				console.log(error)
			})
	}

	logOut = () => {
		localStorage.removeItem('jwt');
    this.props.history.push('/')
	}

	render() {
		return (
			<Contain>
				<Logout onClick={this.logOut}>Logout</Logout>
				<JList>JOKE LIST</JList>
				{this.state.jokes.map((joke, index) => <Joke key={index} joke={joke}/>)}
			</Contain>
		)
	}
}

export default Jokes;
