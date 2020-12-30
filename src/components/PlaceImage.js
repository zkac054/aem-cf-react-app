import React from 'react';
import * as Constants from '../constants';

export default function PlaceImage({ props }){
	console.log("here");
	console.log(props);
	if(!props)
		return null;

	var style = {
		backgroundImage: "url(" + Constants.DUMMY_AEM_URL + props.image.value + ")",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
	}

	return(
		<section className="placeimage" style={style}>
			<div className="placetitle">
				<h3>{props.english_name.value}</h3>
				<h4>{props.japanese_name.value}</h4>
			</div>
		</section>
	);	
}
