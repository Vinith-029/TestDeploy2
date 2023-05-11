import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { domAnimation } from 'framer-motion';
import { logo } from '../assets';
import Navigation from '../components/Nav';

const instance = axios.create({
  baseURL: 'https://testlogiship.onrender.com/api/package/',
  timeout: 5000, // Timeout to wait for a response (in milliseconds)
});

const ProdDetails = () => {

  const navigate = useNavigate();

  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [volume, setVolume] = useState('');
  const [quantity, setQuantity] = useState('');
  const [producttype, setProducttype] = useState('');
  const [document,setDocument] = useState('');
  const handleSource = (e) => {
    setSource(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleProducttype = (e) => {
    setProducttype(e.target.value);
  };
  const handleDocument = (e) => {
    setDocument(e.target.file);
  };
  const handleNext = async (event) => {
    event.preventDefault();

    try{
      const response = await instance.post("/productdetails", {
        source,
        destination,
        volume,
        quantity,
        producttype,
        document,
      });
      alert("Product Added");
      navigate("/SelectVehicle" ,{ state: { productId: response.data._id } });
      console.log(response.data);
    }catch(err){
      console.error(err);
      alert("Error adding product");
    }
  }

  return (
    <div>
      {/* <button onClick={handlepayment}>
       buy now
    </button> */}
      <Navigation />
      <div className="bg-hero-pattern bg-cover h-screen justify-center space-y-5">
        <div className="flex flex-col h-screen space-y-10 justify-center">
          <div className="text-center text-[30px] text-[#FFFFFF] relative top-4">
            Enter <span className='text-[#915eff]'>Product Details</span>
          </div>

          <div className="grid grid-cols-2 grid-rows-4 gap-y-4 w-1/3 justify-items-center mx-auto">
            <div className=" p-4  px-30 rounded font-semibold">Source</div>
            {/* <input type="text" className="rounded bg-inputBoxColor p-3 " /> */}
            <select className="col-span-1 px-12 row-span-1  bg-inputBoxColor rounded p-2 outline-none" name='source' value={source} onChange={handleSource}>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="pune">Pune</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="def" disabled selected></option>
          </select>
          <div className=" p-4  px-30 rounded font-semibold">Destination </div>
            {/* <input type="text" className="rounded bg-inputBoxColor p-3 " /> */}
            <select className="col-span-1 px-12 row-span-1  bg-inputBoxColor rounded p-2 outline-none" name='destination' value={destination} onChange={handleDestination}>
          
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="pune">Pune</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="def" disabled selected></option>
            </select>
            
            <div className=" p-4  rounded font-semibold">Volume (in m3)</div>
            <input type="number" className="rounded px-2 bg-inputBoxColor p-3" value={volume} onChange={handleVolume} />
             
            <div className=" p-4  rounded font-semibold">Quantity</div>
            <input type="number" min='0' className="rounded px-2 bg-inputBoxColor p-3 "value={quantity} onChange={handleQuantity}/>
            <div className=" p-4 rounded font-semibold">Product Type</div>
            {/* <input type="text" className="rounded bg-inputBoxColor p-3 " /> */}
            <select className="col-span-1 px-4 row-span-1  bg-inputBoxColor rounded p-2 outline-none" value={producttype} onChange={handleProducttype}>
          
            <option value="electro">Electronics</option>
            <option value="consumeDry">Consumable Dry</option>
            <option value="consumeLiq">Consumable Liquid</option>
            <option value="Perish">Perishable Goods</option>            
          </select>
          </div>
          <div className='m-auto w-100% text-align-center'>
          <label class="block mb-2 text-sm font-medium text-white dark:text-white" for="multiple_files">Upload Documents for Transportation. Files should be less than 5 MB</label>
          <input class="block w-full text-sm text-white-400 border-none rounded cursor-pointer bg-inputBoxColor  file:text-black file:bg-[#f8f8f8a9] " id="multiple_files" type="file" 
           value={document} onChange={handleDocument}/>
        </div>
          
          <div className="flex flex-row space-x-72 items-center justify-evenly ">
              <Link to = "/Admin">
              <button
                class="bg-none hover:bg-[#915EFF]  hover:text-black text-white font-bold py-2 px-4 relative left-9 border
        border-[#915EFF] rounded"
              >
                Back
              </button>
              </Link>
            
              <button
                class="bg-none hover:bg-[#915EFF]  hover:text-black text-white font-bold py-2 px-4 border
        border-[#915EFF] rounded" onClick={handleNext}
              >
                Next
              </button>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
