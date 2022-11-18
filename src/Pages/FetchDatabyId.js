import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams}  from 'react-router-dom';

function FetchDatabyId(){
    const {id} = useParams();
    const [data, setData] = useState([]);
    const[ error,setError]=React.useState('');

    useEffect(() => {
        Axios.get('https://bat-recup-staging-backend.cleverapps.io/api/details-fiche/' + id)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((err) => {
            if(err.code ==='ERR_BAD_REQUEST')
            setError("ID does not exist!")
           console.log(err);
            return
         });
      }, []);
    

    return (
      <div className='displayed_data'>
        <div className='container'>
        <div className='data'>
          <div className='id'> {data.id} <p className='text-danger'> {error}</p> </div>
          <div className='title'>{data.title}</div>
          <div>{data.presentation}</div>
          <div>{data.status_subscription}</div>
          <div>{data.start_date_subscription}</div>
          <div>{data.end_date_subscription}</div>
          <div><a href={data.social_link_fb}>{data.social_link_fb}</a></div>
          <div> <a href={data.social_link_insta}>{data.social_link_insta}</a></div>
          <div><a href={data.web_site_url}>{data.web_site_url}</a></div>
          <div>{data.phone_number}</div>
          <div>{data.logo?.id}</div>
          <div><img src={data.logo?.url} alt="White Cover Consulting logo" width="100" /></div>
          <div>{' '}
          {data.photos?.map((data1, index1) => {
            return( 
            <div key="index1">
            {data1.id}         
            </div>
            )
          })}</div>
          <div>
          {' '}
          {data.photos?.map((data1, index1) => {
            return( 
            <div key="index1">
            <img src={data1.url} alt="Photos" width="100" />
            </div>
            )
          })}
          </div>
          <div>{data.subscription?.id}</div>
        <div>{data.subscription?.subscription_name}</div>
        <div></div>{data.subscription_limite}</div>
          
        
        </div>
      </div>
        );  
}


export default FetchDatabyId;