import React from 'react';
import { Link } from 'react-router-dom';
import AvatarImg from '../assets/images/clients/avater.jpg';

const title = "More Than 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  { imgUrl: AvatarImg, imgAlt: 'client avatar', text: 'Join with Us' },
  { imgUrl: AvatarImg, imgAlt: 'client avatar', text: 'Join with Us' },
  { imgUrl: AvatarImg, imgAlt: 'client avatar', text: 'Join with Us' },
  { imgUrl: AvatarImg, imgAlt: 'client avatar', text: 'Join with Us' },
  { imgUrl: AvatarImg, imgAlt: 'client avatar', text: 'Join with Us' },
  { imgUrl: AvatarImg, imgAlt: 'client avatar', text: 'Join with Us' },
  { imgUrl: AvatarImg, imgAlt: 'client avatar', text: 'Join with Us' },
];

const LocationSprade = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className="container">
        <div className="section-header text-center">
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>

        <div className="section-wrapper">
          <div className="clients d-flex flex-wrap justify-content-center gap-3">
            {clientsList.map((val, i) => (
              <div key={i} className='client-list text-center'>
                <div className="client-thumb mb-2">
                  <img src={val.imgUrl} alt={val.imgAlt} className="img-fluid rounded-circle" width="80" height="80" />
                </div>
                <Link to="/sign-up" className='client-content d-block text-decoration-none text-dark'>
                  <span>{val.text}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
