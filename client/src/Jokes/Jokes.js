import React from 'react';
import axios from 'axios';
import Joke from './Joke';

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

	
	render() {
		return (
			<div>
				{this.state.jokes.map((joke, index) => <Joke key={index} joke={joke}/>)}
			</div>
		)
	}
}

export default Jokes;
