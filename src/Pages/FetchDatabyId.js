import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams}  from 'react-router-dom';

function FetchDatabyId(){
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://bat-recup-staging-backend.cleverapps.io/api/details-fiche/' + id)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((err) => console.log(err));
      }, []);
    

    return (
        <div>{data.id}</div>
        );
    
}


export default FetchDatabyId;