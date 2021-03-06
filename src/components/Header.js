import React from 'react';
import './Header.css';
import logo_small from '../assets/tesla_logo_small.svg';

const Header = () => {
	return (
		<div className="header">  
		
				<div className="header_left">
					<img src={logo_small} alt='Tesla Logo' />
				</div>	
				
				<div className="header_center">
					<p>Model S</p>
					<p>Model 3</p>
					<p>Model X</p>
					<p>Model Y</p>
					<p>Solar Roof</p>
					<p>Solar Panels</p>
				</div>
				
				<div className="header_right">
					<p>Shop</p>
					<p>Account</p>			
				</div>
				
		</div>
	)
}

export default Header;