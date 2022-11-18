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
      <div className='displayed_data'>
        <div className='id'> {data.id}</div>
        <div className='title'>{data.title}</div>
        <div>{data.presentation}</div>
        <div>{data.status_subscription}</div>
        <div>{data.start_date_subscription}</div>
        <div>{data.end_date_subscription}</div>
        <div><a href={data.social_link_fb}>{data.social_link_fb}</a></div>
        <div> <a href={data.social_link_insta}>{data.social_link_insta}</a></div>
        <div><a href={data.web_site_url}>{data.web_site_url}</a></div>
        <div>{data.phone_number}</div>
        <div>{data.logo.id}</div>
      </div>
        );
    
}


export default FetchDatabyId;