import React from 'react';

const Button = (props) => {
	return (
		<div className={`button ${props.imp === 'secondary' ? 'button__white' : ''}`}>
			<a href={props.Url}>{props.text}</a>
		</div>			
	)
}

export default Button;