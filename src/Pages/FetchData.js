import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchData(){
    const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement')
    .then( res => {
      console.log("Getting from ::::", res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  }, []);
  
  const arr = data.map((data, index) => {
    return(
      <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.presentation}</td>
      <td>{data.status_subscription}</td>
      <td>{data.start_date_subscription}</td>
      <td>{data.end_date_subscription}</td>
    </tr>
    )
  })

  return (
    <div className="App">
      <h1>Fetching data using <i>Axios</i></h1>
      <table>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>presentation</th>
            <th>status_subscription</th>
            <th>start_date_subscription</th>
            <th>end_date_subscription</th>
          </tr>
          {arr}
        </table>
    </div>
  );
}



export default FetchData;