import React from 'react';
import Navigation from '../components/Nav';
import { Link } from 'react-router-dom';

export const ApproveDocuments = () => {
  return (
    <div>
      <Navigation/> 
      <div className='bg-hero-pattern bg-cover flex flex-col h-screen justify-center space-y-10 overflow-hidden'>
        <div className='text-center text-3xl'>Documentations pending for <span className='text-[#915EFF]'>approval</span>
        </div>
        <div className="relative w-full flex flex-col bg-transparent m-4 p-4 text-center items-center">
        <table class='w-auto border-separate [border-spacing:0rem]'>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0">
              <th className="col bg-inputBoxColor bg-opacity-70 px-3 py-6">Registration No.</th>
              <th className="col bg-inputBoxColor bg-opacity-70 px-6 py-2">Company Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 px-6 py-2">Vehicle Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 px-6 py-2">Goods Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 px-6 py-2">Source</th>
              <th className="col bg-inputBoxColor bg-opacity-70 px-6 py-2">Destination</th>
              <th className="col bg-inputBoxColor bg-opacity-70 px-6 py-2">Documents</th>
              <th className="col bg-inputBoxColor bg-opacity-70 px-6 py-2">Approval</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Number 1</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Company 1</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Vehicle A</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Goods 1</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Source A</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">Source B</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2"><a href='#'>Document 1</a></td>
              <th className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">
              <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="rounded w-4 h-4 
        text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-75"/>
        <label for="default-radio-1" class="ml-2 text-sm font-medium text-white">Approved</label>
              </th>
            </tr>
          </tbody>
          </table>
          </div>

          <div className='flex flex-row space-x-64 justify-center'>
        <Link to="/Admin">
        <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
          Back
        </button>
        </Link>
        {/* <Link to="/"> */}
        <button type="UPDATE" class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
          Submit
        </button>
        {/* </Link> */}
      </div>
      </div>
      
      

    </div>
  );
}
 export default ApproveDocuments;