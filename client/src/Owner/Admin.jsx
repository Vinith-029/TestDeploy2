import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import Navigation from '../components/Nav'



const Admin = () => {
  return (
    <div>
      <Navigation />
    <div className='bg-hero-pattern bg-cover flex flex-col h-screen justify-center space-y-10'>
      <div className='text-center text-[30px] text-[#FFFFFF]]'>
        What would you like to do?
        </div>
      <div className= 'flex flex-row items-center justify-center space-x-24'>
      <Link to="/ProdDetails">
      <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded ">
        Place Order
    </button> 
    </Link>
    
    {/* </div> */}
    {/* <div className= 'flex flex-col items-center justify-center'> */}
      <Link to='/WarehouseSelection'>
    <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
      Inventory
    </button>
    </Link>
    </div>
    <div className= 'flex flex-row items-center justify-center space-x-24'>
      <Link to='/Tracking'>
    <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
      Track Orders
    </button>
    </Link>
    {/* </div> */}
    {/* <div className='flex flex-col items-center justify-center'> */}
    <Link to='/Invoice'>
    <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
      Invoice
    </button>
     </Link>
    </div>
    <div className="flex flex-row items-center justify-center space-x-24">
    <Link to='/ApproveVehicles'>
    <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
      Approve Vehicles
    </button>
     </Link>
     {/* <Link to='/ApproveDocuments'>
    <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
      Approve Documents
    </button>
     </Link> */}
     {/* </div> */}
      {/* <div> */}
     <div className="flex flex-col items-center justify-center space-x-24">
     <Link to='/Credential'>
     <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
      Reset Password
    </button>
    </Link>
     </div>
     </div>
    
    
    </div>
    </div>
  );
}

export default Admin;
