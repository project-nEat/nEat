import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('/loginorsignup', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
  };

  return (
    <div className="auth h-screen bg-black flex justify-center items-center">
      <div className="w-96 p-6">
        <h1 className="text-white text-4xl text-center">Login/Sign Up</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label for="email" className="text-white block text-base mb-2">Email</label>
          <input type="email" placeholder="Enter Email" name="email" required
            className="text-black w-full text-base px-2 py-1 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label for="password" className="text-white block text-base mb-2">Password</label>
          <input type="password" placeholder="Enter Password" name="password" required
            className="text-black w-full text-base px-2 py-1 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-7">
          <button className="bg-white py-1 w-full rounded-md hover:bg-gray-100 font-semibold" type="submit"
            onClick={handleSubmit}
          >Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;