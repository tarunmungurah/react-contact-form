import Axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <td>{data.social_link_insta}</td>
        <td>{data.web_site_url}</td>
        <td>{data.phone_number}</td>
        <td>{data.logo.id}</td>
        <td>
          {/*img elements must have an alt prop, either with meaningful text, or an empty string for decorative images*/}
          <img src={data.logo.url} width="100" />
        </td>
        <td>
          {' '}
          {data.photos.map((data1, index1) => {
            return <img src={data1.url} width="100" />;
            {
              /*img elements must have an alt prop, either with meaningful text, or an empty string for decorative images*/
            }
          })}
        </td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1>
        Fetching data using <i>Axios</i>
      </h1>
      <table>
        <tr>
          <th>Id</th>
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
        </tr>
        {arr}
      </table>
    </div>
  );
}

export default FetchData;
