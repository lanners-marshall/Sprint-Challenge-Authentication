import React from 'react';

const Joke = (props) => {
	return (
		<div>
			<p>{props.joke.type}</p>
			<p>{props.joke.setup}</p>
			<p>{props.joke.punchline}</p>
		</div>
	)
}

export default Joke;
