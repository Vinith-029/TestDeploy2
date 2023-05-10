import React from 'react';
import { Link } from 'react-router-dom';
import { domAnimation } from 'framer-motion';
import { logo } from '../assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../components/Nav';

const Wcredential = () => {
  return(
  <div>
    <Navigation/>
    
      <div class="bg-hero-pattern bg-cover h-screen flex flex-col items-center justify-center border">
      <h2 class="text-white text-4xl pb-10 ">Change<span className='text-[#915EFF]'> Credentials</span> for Warehouse</h2>
      {/* <div class="flex items-center mb-4">
        <input id="default-radio-1" type="radio" value="" name="default-radio" class="rounded w-4 h-4 
        text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-75"/>
        <label for="default-radio-1" class="ml-2 text-sm font-medium text-white">ADMIN</label>
        </div> */}


          <div className="flex flex-col">
            <div className="text-xs">Select the warehouse</div>
            <select className="col-span-1 px-12 row-span-1  bg-inputBoxColor bg-opacity-50 rounded p-2 px-14 outline-none">
          
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="pune">Pune</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="def" disabled selected></option>
          </select>
          </div>

          <div className="flex flex-col">
            <div className="text-xs">Admin Password</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name="password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xs">New Password</div>
            <input
              className="rounded outline-none bg-inputBoxColor bg-opacity-50 mb-3 p-2 px-3"
              name="password"
              type="password"
              placeholder=""
            />
          </div>
          <div className='text-xs text-[#915EFF]'>
          {/* <Link to='/Wcredential' */}
            <a href="/Credential">Change credentials for admin?</a>
          </div>

          


        {/* <div class="flex items-center">
        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="rounded w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-75"/>
        <label for="default-radio-2" class="ml-2 text-sm font-medium text-white">WAREHOUSE</label>
        </div> */}
        <div class="flex items-center mt-16">
        <Link to='/Wcredential'>
        <button className="bg-[#915EFF] hover:bg-purple-700  text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider">
              SUBMIT
            </button>
            </Link>
         </div>
      </div>
      </div>
    
  );
}

export default Wcredential;
