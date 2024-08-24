import { AppWindow } from 'lucide-react';
import React, { useState } from 'react';
import { FaUser, FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import app from "../img/app.png";

function Forget() {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!inputValue) {
      setInputError('Email/Mobile cannot be blank.');
      valid = false;
    } else {
      setInputError('');
    }

    if (!password) {
      setPasswordError('Password cannot be blank.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      setSuccessMessage('Form submitted successfully!');
      setInputValue('');
      setPassword('');

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#f1f1f1]">
        <div className="bg-white p-10 shadow-[0_0_30px_rgba(0,0,0,0.2)] w-[500px] max-sm:w-[300px] max-sm:p-5 max-sm:mt-5 max-sm:mb-10 md:mt-7 md:mb-10">
          <h2 className="text-[20px] flex items-center justify-center">Fill in this form to Login</h2>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex items-center rounded">
              <span className="text-red-800 p-4 bg-[#f1f1f1]">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="email / mobile"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full pl-4 border-[4px] border-[#f1f1f1] p-[8px] outline-none placeholder-black"
              />
            </div>
            {inputError && (
              <p className="text-red-500 mt-2 transition-opacity duration-500 ease-in-out opacity-100">
                {inputError}
              </p>
            )}

            <div className="flex items-center pt-2 rounded">
              <span className="text-red-800 p-4 bg-[#f1f1f1]">
                <FaKey />
              </span>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 border-[4px] border-[#f1f1f1] p-[8px] outline-none placeholder-black"
              />
            </div>
            {passwordError && (
              <p className="text-red-500 mt-2 transition-opacity duration-500 ease-in-out opacity-100">
                {passwordError}
              </p>
            )}

            <div className="flex items-center my-5">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-800">Remember Me</label>
            </div>

            <button type="submit" className="bg-[#843135] w-full p-2 text-white hover:bg-[#a94442] transition duration-300">
              LOGIN
            </button>
          </form>

          {successMessage && (
            <p className="text-green-500 mt-4 transition-opacity duration-500 ease-in-out opacity-100">
              {successMessage}
            </p>
          )}

          <Link
            to="/Forget"
            className="block text-start mt-4 text-[#843135] hover:text-[#a94442] transition duration-300"
          >
            Forget Password?
          </Link>
        </div>
      </div>

      <div className='bg-white flex flex-col md:flex-row items-center md:items-start p-5 md:p-10 md:pb-0'>
        <img src={app} alt="App Preview" className='w-full max-w-[400px] h-auto' />
        <div className='flex flex-col items-center md:items-start md:ml-10 text-center md:text-left'>
          <h1 className='text-[20px] md:text-[21px] font-semibold mb-4 max-sm:mt-5 md:mt-32 px-4 md:px-0'>
            Kshamadevi Group, Simplify your business <br />
            | Order and Recommend our products
          </h1>
          <div className='p-4 md:p-5 bg-[#843135] text-white w-full max-w-[500px] rounded-md transition-all duration-300 ease-in-out hover:scale-105 md:mt-12'>
            <h2 className='text-[18px] max-sm:text-[16px] flex items-center justify-center md:justify-start'>
              Download The App Here:<AppWindow className='ml-2 mt-2 md:ml-3' />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
