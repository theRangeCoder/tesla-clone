import React from 'react';
import './Button.css';

// For each button
const Button = (props) => {
	return (
		<a className={`button ${props.imp === 'secondary' ? 'button__white' : ''}`} href={props.Url}>{props.text}</a>	
	)
}

export default Button;