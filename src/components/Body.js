import React from 'react';

const Body = (props) => {
	return (
		<div className="body">
			<div className="body_container">
			
				<div className="body_upper">
					<p>{props.title}</p>
					<div className="description">
						<p>{props.descr}</p>		
					</div>
				</div>
				
				<div className="body_lower">
					<div className="buttons">
						
					</div>
				</div>
				
			</div>
		</div>			
	)
}

export default Body;