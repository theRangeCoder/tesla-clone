import React from 'react';
import Button from './Button';

import './Body.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Body = (props) => {
	return (
		<div className="body" style={{
			backgroundImage: `url(${props.bcgImg})`
		}}>
			<div className="body_container">
			
				<div className="body_upper">
					<p>{props.title}</p>
					<div className="description">
						<p>{props.descr}</p>		
					</div>
				</div>
				
				<div className="body_lower">
					<div className="buttons">
						<Button imp='primary' text={props.leftBtn} Url={props.leftBtnUrl} />
						
						{/*Render the second button only if twoBtns is true i.e. if two buttons exist in that component*/}
						{props.twoBtns && (
							<Button imp='secondary' text={props.rightBtn} Url={props.rightBtnUrl} />
						)}
					</div>
					
					{props.first && (
						<div className="expand">
							<ExpandMoreIcon />
						</div>
					)}					
					
				</div>
				
			</div>
		</div>			
	)
}

export default Body;