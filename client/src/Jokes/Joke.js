import React from 'react';
import { JokeDiv } from './css';

const Joke = (props) => {
	return (
		<JokeDiv>
			<p>{props.joke.type}</p>
			<p>{props.joke.setup}</p>
			<p>{props.joke.punchline}</p>
		</JokeDiv>
	)
}

export default Joke;
