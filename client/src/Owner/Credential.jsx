import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { domAnimation } from 'framer-motion';
import { logo } from '../assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../components/Nav';

const Credential = () => {
  return (
    <div>
    <Navigation/>
    
      <div class="bg-hero-pattern bg-cover h-screen flex flex-col items-center justify-center border">
      <h2 class="text-white text-4xl pb-10 ">CHANGE YOUR <span className='text-[#915EFF]'>CREDENTIALS</span></h2>
      {/* <div class="flex items-center mb-4">
        <input id="default-radio-1" type="radio" value="" name="default-radio" class="rounded w-4 h-4 
        text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-75"/>
        <label for="default-radio-1" class="ml-2 text-sm font-medium text-white">ADMIN</label>
        </div> */}


          <div className="flex flex-col">
            <div className="text-xs">Enter your Email</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3  p-2 px-3"
              name="email"
              type="email"
              placeholder=""
            />
          </div>

          <div className="flex flex-col">
            <div className="text-xs"> Old Password</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name="password"
              type="password"
              placeholder=""
            />
          </div>

          <div className="flex flex-col">
            <div className="text-xs"> New Password</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name="password"
              type="password"
              placeholder=""
            />
          </div>
          

          


        
        <div class="flex items-center mt-16">
        
        <button className="bg-[#915EFF] hover:bg-purple-700  text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider">
              SUBMIT
            </button>
            
         </div>
      </div>
      </div>
    
  );
}

export default Credential;
