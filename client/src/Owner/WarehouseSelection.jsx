import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Navigation from '../components/Nav';
import axios from 'axios';
import {useEffect , useState}from 'react'



export const WarehouseSelection = () => {
  const navigate = useNavigate();
  const [Whists, sethist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/warehouse/getHistory', {
          // params: {
          //   status: 'approved',
          // },
        });
        sethist(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <Navigation />
    <div className='bg-hero-pattern bg-cover h-screen justify-center space-y-10'>
      <div className='flex flex-col h-screen space-y-10 justify-center'>
      <div className='text-center text-[30px] text-[#FFFFFF]'>
      Select a <span className='text-[#915EFF]'>warehouse</span>
        </div>
        <div className="text-center space-x-5 space-y-10"> 
          <Link to="/ShowInventory">
        <button class="w-36 bg-[#915EFF] hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
        border-[#915EFF] rounded">
          Bangalore
        </button>
        </Link>
        <Link to="/ShowInventory">
        <button class="w-36 bg-[#915EFF]  hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
        border-[#915EFF] rounded">
          Hyderabad
        </button>
        </Link>
        <Link to="/ShowInventory">
        <button class="w-36 bg-[#915EFF] hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
        border-[#915EFF] rounded">
          Chennai
        </button>
        </Link>
        </div>
        <div className="text-center space-x-5 space-y-10">
        <Link to="/ShowInventory">
          <button class="w-36 bg-[#915EFF] hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
          border-[#915EFF] rounded">
            Kolkata
          </button>
          </Link>
          <Link to="/ShowInventory">
          <button class="w-36 bg-[#915EFF] hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
          border-[#915EFF] rounded">
            Delhi
          </button>
          </Link>
          <Link to="/ShowInventory">
          <button class="w-36 bg-[#915EFF] hover:bg-[#b491ff] text-white font-bold py-2 px-4 border
          border-[#915EFF] rounded">
            Pune
          </button>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link to="/Admin">
      <button className='bg-none hover:bg-[#915EFF] hover:text-black text-white font-bold py-2 px-4 border
        border-[#6e2bff] rounded'>
          Back
        </button>
        </Link>
    </div>  
        </div>
        
      </div>
      </div>
  );
}

export default WarehouseSelection;
