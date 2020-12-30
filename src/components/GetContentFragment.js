import { useState, useEffect } from "react";

export default function GetContentFragment( uri ){
  // first render set up state variable for data
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // second render, make the fetch request
  useEffect(() => {
    if(!uri) return;

    uri = "./static_cf.json";
    fetch(uri)
      .then(response => response.json())
      .then(data => setData(data.[":items"]["root"][":items"].responsivegrid[":items"].contentfragment.elements))
      .then(() => setLoading(false))
      .catch(setError);  
  }, [uri]);

  return {loading, data, error};
}