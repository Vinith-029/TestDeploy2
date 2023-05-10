import React from 'react';
import {Link} from 'react-router-dom';

const Vhome = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
    <div className="bg-hero-pattern bg-cover h-screen ">
      <form 
        className="flex flex-col justify-center items-center h-screen w-screen font-mono space-y-2 "
      >
        <div className="text-6xl mb-24 flex flex-row font-outfit font-medium gap-5 tracking-wider  " >Hello, <span className='text-buttonColor flex flex-row font-outfit font-bold tracking-wider'> User</span></div>
        <div className="flex flex-row justify-center font-outfit gap-20 w-screen">
        <Link to="/Vlist">
          <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white py-1 px-2 rounded m-2  h-12 w-96 tracking-wider ">
           List Your Vehicle
          </button>
          </Link>
        
         
          <Link to = "/Vapprove">
          <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white py-1 px-2 rounded m-2  h-12 w-96 tracking-wider">
         
          Approved Vehicles
         
          </button>
          </Link>
         
          
          
        
        </div>
        <div className="flex flex-row justify-center font-outfit gap-20 w-screen">
        <Link to="/Vpending">
          <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white py-1 px-2 rounded m-2  h-12 w-96 tracking-wider ">
           Approval Pending
          </button>
          </Link>
        
         
          <Link to ="/Vreject">
          <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white py-1 px-2 rounded m-2  h-12 w-96 tracking-wider">
         
          Rejected Vehicles
         
          </button>
          </Link>
         
          
          
        
        </div>
        <div className="flex flex-col justify-center items-center font-outfit gap-6 w-screen">
        <Link to ="/Vtransit">
        <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white py-1 px-2 rounded m-2  h-12 w-96 tracking-wider gap-4 font-mono">
         
          In-Transit Vehicles
         
          </button>
          </Link>
          </div>
      </form>
    </div>
  </div>
  );
};

export default Vhome;