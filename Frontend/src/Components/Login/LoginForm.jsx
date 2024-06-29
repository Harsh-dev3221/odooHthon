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

const LoginForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
