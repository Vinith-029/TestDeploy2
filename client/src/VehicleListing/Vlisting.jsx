import React from 'react';
import { Link } from 'react-router-dom';

export const Vlisting = () => {
  return (
    <div >
      <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center overflow-hidden">
      <div className="text-6xl mb-9 flex justify-center font-bold font-mono gap-7 tracking-wide " >VEHICLE<span className='text-buttonColor flex flex-row font-bold font-mono tracking-wide'> LISTING</span></div>
        <div className=" relative w-full flex flex-col  items-center bg-transparent m-4 p-4 text-center font-mono font-extralight ">
        <div className='space-y-24'>
        <table class='w-auto border-separate [border-spacing:0rem] '>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
            <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6 ">Registration No.</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Company Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Vehicle Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Goods Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Source</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Destination</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className='tracking-wider'>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
   
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
   
         
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
   
          
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
   
            
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
   
             
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
   
            
            </tr>
          </tbody>
          </table>
          </div>

        <div className="flex flex-col justify-center items-center mt-10 ">

        <div className='flex flex-row gap-20'>
        <Link to="/Vhome">
        <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider">
            -- BACK 
            </button>
            </Link>
           
            <div className='flex flex-row'>
            <Link to="/Vlist">
        <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider">
             LIST YOUR VEHICLE
            </button>
            </Link>
        
       
        </div>
       
        </div>

        </div>
        </div>


      </div>


    </div>
  );
}
export default Vlisting;