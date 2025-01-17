import React from 'react';
import { Link } from 'react-router-dom';
import landingPhoto from '../assets/landing_photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Landing = ({ toggleSidebar }) => {
  return (
    <div className="landing flex flex-col min-h-screen bg-black">
      <div className="header flex justify-between content-center p-6 text-white">
        <button
          onClick={toggleSidebar}
          className="italic font-bold text-5xl hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faBars} /> nEat
        </button>

        {/* <button className="bg-white hover:bg-gray-100 font-bold py-2 px-4 rounded">
          <div className="text-black">
            <Link to="/auth">Login/Sign Up</Link>
          </div>
        </button> */}
      </div>
      <div className="landing-content flex justify-between items-center p-20">
        <h2 className="text-9xl text-white h-1/2 w-1/2">
          Never waste food again.
        </h2>
        <img
          className="landing-photo h-1/3 w-1/2 rounded-2xl"
          src={landingPhoto}
          alt="landing-photo"
        />
      </div>
    </div>
  );
};

export default Landing;
