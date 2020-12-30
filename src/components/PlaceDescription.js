import React from 'react';

export default function PlaceDescription({ props }){
	return(
		<section className="placedescription">
			<div className="description-container" dangerouslySetInnerHTML={{__html : props.description.value}} />
		</section>
	);	
}
