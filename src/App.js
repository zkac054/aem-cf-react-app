import React from 'react';
import GetContentFragment from "./components/GetContentFragment";
import PlaceImage from './components/PlaceImage';
import PlaceDescription from './components/PlaceDescription';
import * as Constants from "./constants";
import './App.css';

function App() {
  // Replace with AEMURL + CONTENT_FRAGMENT constant when you want to roll out to production.
  const { loading, data, error } = GetContentFragment(Constants.DUMMY_AEM_URL + Constants.DUMMY_CONTENT_FRAGMENT);

  if( loading ) return <b>loading...</b>;
  if( error ) return <b>error</b>;

  return (
    <div className="App">
      <PlaceImage props={ data } />
      <PlaceDescription props={ data }/>
    </div>
  );
}

export default App;
