import React from 'react';
import { Link } from 'react-router-dom';
import './Track.css';
import Status1 from '../assets/image1.png';
import Status2 from '../assets/image2.png';
import Status3 from '../assets/image3.png';
import Status4 from '../assets/image4.png';
import Navigation from '../components/Nav';

const Tracking = () => {
  return (
    
      <div className='overflow-x-hidden'>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Navigation />

      {/* <div className='bg-hero-pattern  bg-cover h-screen flex flex-col justify-center overflow-y-hidden'> */}
      

      <div className="container px-1 px-md-4 py-5 mx-auto part1">
        <table>
          <tr>
            <td>
             <label className='flex justify-center w-screen -mx-16 text-3xl'>Tracking Order</label> 
           </td>
          </tr>
          <tr>
            <td>
            <label className='w-screen flex justify-center -mx-16 text-2xl'> Enter the Order ID</label>
            </td>
          </tr>
          <tr>
            <td className='flex justify-center'>
              <input type="text" name="order_id" className='bg-inputBoxColor bg-opacity-50 px-2 py-2 first-letter: text-white m-4 rounded outline-none'/>
            </td>
          </tr>
          <tr>
            <td className=''>
            <button type="submit" class=" subbtn btn  ">
              Search
            </button>
            </td>
          </tr>
        </table>
        </div>

        {/* <div className="c1 flex items-center">
          <div className="row d-flex justify-content-between px-3 top pt-0 ">
            <div className="d-flex text-align-center items-center ">
              <label className='text-xl'>Tracking Order</label>
            </div>
          </div>
          <form className="tracking-form row d-flex justify-content-between px-3 top">
            <h4 className="mb-5">
              Enter the Order Id :{" "}
              <input className="font-weight-bold" name="orderid" />
            </h4>
            <button type="submit" className="btn btn-primary subbtn">
              Search
            </button>
          </form>
        </div>
      </div> */}
      <div className="container px-1 px-md-4 py-5 mx-auto display part-2">
        <div className="c2">
          <div className="row d-flex justify-content-between px-3 top">
            <div className="d-flex">
              <h5 className="mx-4">
                ORDER
                <span className="text-primary font-weight-bold"> #7286382</span>
              </h5>
            </div>
            <div className="d-flex flex-column text-sm-right">
              <p className="mb-1 mx-3">
                Expected Arrival{" "}
                <span className="font-weight-bold">29 Aug 2022</span>
              </p>
              <p className="mb-1 mx-3">
                USPS{" "}
                <span className="font-weight-bold">2374723467163473124234</span>
              </p>
            </div>
          </div>
          {/* Add class "active" to progress */}
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <ul id="progressbar" className="status text-center">
                <li className="active step0 od1" />
                <li className="active step0 od2" />
                <li className="active step0 od3" />
                <li className="step0 od4" />
              </ul>
            </div>
          </div>
          <div className="row justify-content-between top">
            <div className="row d-flex icon-content">
              <img src={Status1} alt="" className="icon" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order <br />
                  Processed
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              <img src={Status2} alt="" className="icon" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order <br />
                  Shipped
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              <img src={Status3} alt="" className="icon" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order <br />
                  En Route
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              <img src={Status4} alt="" className="icon" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order <br />
                  Arrival
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center ml-16'>
        <Link to='/Admin'>
          <button class="w-24 bg-none hover:bg-[#915EFF]  hover:text-black text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
            Back
          </button>
        </Link>
      </div>
      </div>
    </div>
    
  );
};

export default Tracking;