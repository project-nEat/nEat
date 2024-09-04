import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className = "landing min-h-screen bg-black">
      <div className="header flex justify-between align-center p-6 text-white">
        <h1 className="italic font-bold text-3xl">nEat</h1>
        <button className="bg-gray-100 hover:bg-white font-bold py-2 px-4 rounded">
          <div className="text-black">
            <Link to='/auth'>Login/Sign Up</Link>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Landing;