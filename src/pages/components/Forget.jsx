import { AppWindow } from 'lucide-react';
import React, { useState } from 'react';
import app from "../img/app.png";

function Forget() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setError('Email/Mobile cannot be blank.');
    } else {
      setError('');
      alert('Form submitted');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#f1f1f1]">
        <div className="bg-white p-8 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.2)] max-w-[500px] h-[300px] w-full">
          <h2 className="text-xl text-center mb-6 mt-11">Request Password Reset</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email/Mobile"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 mb-2 border focus:outline-none shadow-inner focus:shadow-lg placeholder-black"
            />
            {error && <p className="text-[#843135] text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-24 h-8 bg-[#843135] text-white mt-3 ml-[160px] hover:bg-[#a94442]"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
           <div className='bg-white flex flex-col md:flex-row items-center md:items-start p-5 md:p-10 md:pb-0'>
            <img src={app} alt="App Preview" className='w-full max-w-[400px] h-auto' />
            <div className='flex flex-col items-center md:items-start mt- md:mt-0 md:ml-10 text-center md:text-left '>
                <h1 className='text-[20px] md:text-[21px] font-semibold mb-4 max-sm:mt-5 md:mt-32 px-4 md:px-0'>
                    Kshamadevi Group, Simplify your business <br />
                    | Order and Recommend our products
                </h1>
                <div className='p-4 md:p-5 bg-[#843135] text-white w-full max-w-[500px] rounded-md transition-all duration-300 ease-in-out hover:scale-105 md:mt-12'>
                    <h2 className='text-[18px] max-sm:text-[16px] flex items-center justify-center md:justify-start'>
                        Download The App Here:<AppWindow className='ml-2 mt-2  md:ml-3' />
                    </h2>
                </div>
            </div>
        </div>

    </>
  );
}

export default Forget;