import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import FetchDatabyId from './FetchDatabyId';
import {Link} from "react-router-dom";


function FetchData() {
  const [data, setData] = useState([]);
  // créer un fichier .env pour stocker l'url au lieu de mettre en dur.
  useEffect(() => {
    Axios.get(
      'https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement'
    )
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.presentation}</td>
        <td>{data.status_subscription}</td>
        <td>{data.start_date_subscription}</td>
        <td>{data.end_date_subscription}</td>
        <td>
          <a href={data.social_link_fb}>{data.social_link_fb}</a>
        </td>
        <td> <a href={data.social_link_insta}>{data.social_link_insta}</a></td>
        <td><a href={data.web_site_url}>{data.web_site_url}</a></td>
        <td>{data.phone_number}</td>
        <td>{data.logo.id}</td>
        <td>
          {/*img elements must have an alt prop, either with meaningful text, or an empty string for decorative images*/}
          <img src={data.logo.url} alt="White Cover Consulting logo" width="100" />
        </td>
        <td>
          {' '}
          {data.photos.map((data1, index1) => {
            return( 
            <div key="index1">
            {data1.id}         
            </div>
            )
          })}
        </td>
        <td>
          {' '}
          {data.photos.map((data1, index1) => {
            return( 
            <div key="index1">
            <img src={data1.url} alt="Photos" width="100" />
            </div>
            )
          })}
        </td>
        <td>{data.subscription.id}</td>
        <td>{data.subscription.subscription_name}</td>
        <td>{data.subscription_limite}</td>
        <td>
          {' '}
          {data.activities.map((activities1, index2) => {
            return( 
            <div key="index2">
            {activities1.id}        
            </div>
            )
          })}
        </td>
        <td>
          {' '}
          {data.activities.map((activities1, index2) => {
            return( 
            <div key="index2">
            {activities1.name}        
            </div>
            )
          })}
        </td>
        <td>{data.thematique.id}</td>



        
        <td>{data.thematique.name}</td>
        <td>{data.adress.id}</td>
        <td>{data.adress.line1}</td>
        <td>{data.adress.line2}</td>
        <td>{data.adress.city}</td>
        <td>{data.adress.postalCode}</td>
        <td>{data.adress.country}</td>
        <td>{data.adress.countryCode}</td>
        <td>{data.adress.region}</td>
        <td>{data.adress.location.id}</td>
        <td>{data.adress.location.type}</td>
        <td>{data.adress.location.lat}</td>
        <td>{data.adress.location.lng}</td>

      </tr>
    );
  });

  return (
    <div className="App">
      <h1>
        Fetching data using <i>Axios</i>
      </h1>
      <table>
     {/* <button className="btn btn-danger">VIEW</button> */}
     <Link to="/fetchdatabyid/:id" element={<FetchDatabyId/>} className="btn btn-danger">VIEW</Link>

        <tr>
          <th>Id </th>          
          <th>Title</th>
          <th>Presentation</th>
          <th>Status Subscription</th>
          <th>Start Date Subscription</th>
          <th>End Date Subscription</th>
          <th>Social Link Fb</th>
          <th>Social Link Insta</th>
          <th>Web Site Url</th>
          <th>Phone Number</th>
          <th>Logo Id</th>
          <th>Logo Url</th>
          <th>Photos Id</th>
          <th>Photos Url</th>
          <th>Subscription Id</th>
          <th>Subscription Name</th>
          <th>Subscription Limite</th>
          <th>Activities Id</th>
          <th>Activities Name</th>
          <th>Thematique Id</th>
          <th>Thematique Name</th>
          <th>Address Id</th>
          <th>Adress Line1</th>
          <th>Adress Line2</th>
          <th>Adress City</th>
          <th>Adress Coutry</th>
          <th>Adress CoutryCode</th>
          <th>Adress Region</th>
          <th>Adress Location-id</th>
          <th>Adress Location-type</th>
          <th>Adress Location-lat</th>
          <th>Adress Location-lng</th>

        </tr>
        {arr}
      </table>
    </div>
  );
}

export default FetchData;
