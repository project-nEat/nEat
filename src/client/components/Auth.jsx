import React from 'react';

const Auth = () => {
  return (
    <div className="auth min-h-screen bg-black flex flex-col">
      <h1 className="text-white text-4xl">Login/Sign Up</h1>
      <div className= "login-container flex flex-col">
        <label className="text-white" for="email">Email</label>
        <input className="text-black" type="email" placeholder="Enter Email" name="email" required />

        <label className="text-white" for="password">Password</label>
        <input className="text-black" type="password" placeholder="Enter Password" name="password" required />

        <button className="bg-white" type="login-or-signup">Submit</button>
      </div>
    </div>
  );
};

export default Auth;