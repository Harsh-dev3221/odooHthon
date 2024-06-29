<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const handleLogin = async (event) => {
  // ... login logic ...
  const userData = await fetchUserData(); // Replace with your logic

  if (!userData) {
    // Handle login failure
    return;
  }

  setIsLoggedIn(true);
  setUserData(userData);
  navigate(getRedirectPath(userData)); // Redirect based on isAdmin
};

// Function to determine redirect path based on isAdmin
const getRedirectPath = (userData) => {
  const { isAdmin } = userData;

  switch (isAdmin) {
    case 0:
      return "/citizen";
    case 1:
      return "/lawenforcement";
    case 2:
      return "/admin";
    default:
      console.error("Unexpected isAdmin value:", isAdmin);
      return "/error"; // Redirect to error page (optional)
  }
};
=======
import React from "react";
import { useState } from "react";

>>>>>>> 910b790e59ac6ceb693ff32217cfb9e70d565075

const LoginForm = ({ onSubmit }) => {

  const[username , setUsername] = useState('')
  const[password, setPassword] = useState('')

  const handelChange = (e) =>{
    const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
  }

  const handelSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/login',{
      method : 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include'
    })
    if(response.ok){
      console.log('Cred sent')
    }else{
      console.log('Not sent')
    }
  }


  return (
    <form onSubmit={handelSubmit} className="w-full max-w-md space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 mb-2">
          Username
        </label>
        <input
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handelChange}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-700 mb-2">
          Password
        </label>
        <input
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handelChange}
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
