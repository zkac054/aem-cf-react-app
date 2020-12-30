import React from 'react';
import GetContentFragmentList from './components/GetContentFragmentList';
import PlaceImage from './components/PlaceImage';
import * as Constants from './constants';
import './App.css';

function AppList() {
	const { loading, data, error } = GetContentFragmentList(Constants.DUMMY_AEM_URL + Constants.DUMMY_CONTENT_FRAGMENT_LIST);

	if( loading ) return <b>loading...</b>;
  	if( error ) return <b>error</b>;

  	const items = data.map((place, index) => 
  		<PlaceImage key={index} props={ place.elements } />
  	);

	return (
		<div className="App">
			{items}
		</div>
	);
}

export default AppList;