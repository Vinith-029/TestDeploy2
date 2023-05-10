import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Navigation from '../components/Nav';
import axios from 'axios';
import {useEffect , useState}from 'react'


const Wtest = () => {

    return (
        <div>
        <div className='bg-hero-pattern bg-cover h-screen justify-center space-y-10'>
          <div className='flex flex-col h-screen space-y-10 justify-center'>
          <div className='text-center text-[30px] text-[#FFFFFF]'>
          Select <span className='text-[#915EFF]'>Check-In</span> or <span className='text-[#6e677d]'>Check-Out</span>
            </div>
            <div className="text-center space-x-5 space-y-10"> 
              <Link to="/Wcheckin">
            <button class="w-36 bg-[#915EFF] hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
            border-[#915EFF] rounded">
              Check-In
            </button>
            </Link>
            <Link to="/Wcheckout">
            <button class="w-36 bg-[#915EFF]  hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
            border-[#915EFF] rounded">
              Check-Out
            </button>
            </Link>
        </div>
            <div className='w-full flex justify-center'>
            <Link to="/second">
             <button class="bg-none hover:text-black hover:bg-[#b491ff] text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
               Back
             </button>
            </Link>
            </div>
        </div>
        </div>
        </div>
        )
}

export default Wtest