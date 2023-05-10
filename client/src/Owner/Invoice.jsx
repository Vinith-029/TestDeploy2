import { Stars } from '@react-three/drei';
import React from 'react';
import { StarsCanvas } from '../components';
import Navigation from '../components/Nav';
import { Link } from 'react-router-dom';
const TransportDetails = () => {
  return (
      <div>
          <Navigation />
      
    <div className=' bg-hero-pattern  bg-cover h-screen flex flex-col justify-center   space-y-10	'>
      <div className=' relative  mt-6  text-4xl text-center'>
        Invoice
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-y-4 w-2/3 justify-items-center mx-auto">
            <div className=" p-1  rounded font-semibold">Vendor/Organization Name :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1 " />
            <div className=" p-1  rounded font-semibold">Order ID :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1 " />
            <div className=" p-1  rounded font-semibold">Route :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1 " />
            <div className=" p-1  rounded font-semibold">Registration Number :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1" />
            <div className=" p-1  rounded font-semibold">Mode of Transport :</div>
            <input type="text" className='rounded bg-inputBoxColor p-1'/>
            <div className=" p-1  rounded font-semibold">Transport Capacity :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1 " />
            <div className=" p-1  rounded font-semibold">Mode of payment :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1 " />
            <div className=" p-1  rounded font-semibold">Amount paid :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1 " />
            <div className=" p-1  rounded font-semibold">Delivery address :</div>
            <input type="text" className="rounded bg-inputBoxColor p-1 " />
            



          </div>
          <div className='flex flex-col items-center justify-center relative bottom-3'>
        <Link to='/Admin'>
          <button class="w-24 bg-none hover:bg-[#915EFF]  hover:text-black text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
            Back
          </button>
        </Link>
      </div>

      </div>
      </div>
  );
}
export default TransportDetails;