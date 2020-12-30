import { useState, useEffect } from "react";

export default function GetContentFragment( uri ){
  // first render set up state variable for data
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // second render, make the fetch request
  useEffect(() => {
    if(!uri) return;

    console.log(uri);

    fetch(uri)
      .then(response => response.json())
      .then(data => setData(data.[":items"]["root"][":items"].responsivegrid[":items"].contentfragmentlist.items))
      .then(() => setLoading(false))
      .catch(setError);  
  }, [uri]);

    //console.log(data.[":items"]["root"][":items"].responsivegrid[":items"].contentfragment.elements);

  return {loading, data, error};
}