import React, { useState } from 'react';
import logo from "../assets/images/logo.jfif";
import loginImg from "../assets/images/login.png";
import googleLogo from "../assets/images/google-icon.svg";
import {Link} from "react-router-dom" // Import CSS file for styles

// Define Login component
const Login = () => {
  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }

  // Return JSX for the Login component
  return (
    <div className="flex min-h-full">
      {/* Left side container */}
      <div className="w-3/5 h-screen flex justify-end">
        <img src={loginImg} alt=""/>
      </div>

      {/* Right side container */}
      <div className="w-2/5 flex justify-center items-center apply_bg">
        <div className="sm:w-full sm:max-w-sm">
          {/* Logo and Sign in heading */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
            <p className='text-center font-bold'>Tennis Bracket</p>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              LOGIN
            </h2>
          </div>

          {/* Form for email and password */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="abc123@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 placeholder-margin-left" // Added placeholder-margin-left class
                  />
                </div>
              </div>

              {/* Password input */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 placeholder-margin-left" // Added placeholder-margin-left class
                  />
                </div>
                <div className="text-sm text-right m-[6px]">
                    <a href="#" className="font-semibold text-primaryColor hover:text-blue-600">
                      Forgot password?
                    </a>
                  </div>       
              </div>
              
              {/* Sign in button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primaryColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Log In
                </button>
              </div>

              <p className='text-center mt-[16px] font-[500]'>Or</p>

              {/* Login with Google button */}
              <div className="flex items-center justify-center">
                
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <img src={googleLogo} alt="Google Logo" className="w-[20px] h-[20px] mr-[12px]" />
                  Login with Google
                </button>
              </div>
            </form>

            {/* Additional sign up message */}
            <p className="mt-10 text-center text-sm text-gray-500">
            Don’t have an account yet?{' '}
              <Link to="/Signup" className="font-semibold leading-6 text-primaryColor hover:text-blue-600">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export Login component as default
export default Login;
