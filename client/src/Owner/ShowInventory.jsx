import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Nav';

const ShowInventory = () => {
  return (
    <div>
      <Navigation/>
      <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center overflow-y-scroll overflow-x-hidden">
        <h1 className="text-center text-4xl mb-10 mt-20">
          <span className='text-[#915EFF]'>Warehouse</span> Details
        </h1>
        <div className="relative w-full flex flex-col bg-transparent m-4 p-4 text-center">
        <table class='w-auto border-separate [border-spacing:0rem] text-sm'>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0">
              <th className="col bg-inputBoxColor bg-opacity-70 w-30 px-3 py-6 ">Product Number</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-30 px-3 py-6 ">Product Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-30 px-3 py-6 ">Product Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-30 px-3 py-6 ">Quantity</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-30 px-3 py-6 ">Check-in Time</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-30 px-3 py-6 ">Check-out Time</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-30 px-3 py-6 ">Destination</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Lorem Ipsum </td>
            </tr>
          </tbody>
          </table>
          </div>

        <div className="flex flex-col justify-center items-center space-y-10 h-screen">


        <Link to="/WarehouseSelection">
          <button class="bg-none hover:text-black hover:bg-[#b491ff] text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
            Back
          </button>
        </Link>
        </div>


      </div>


    </div>
  );
}
export default ShowInventory;