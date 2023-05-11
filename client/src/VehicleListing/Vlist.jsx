import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Navigation from '../components/Nav';
import { Link, useNavigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'https://testlogiship.onrender.com/api/transport',
  timeout: 5000, // Timeout to wait for a response (in milliseconds)
});
const Vlist = () => {
  const [vehicle_Number, setRegistration] = useState('');
  const [company_name, setCompname] = useState('');
  const [vehicle_type, setVehicletype] = useState('');
  const [goods_type, setGoodstype] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [document, setDocument] = useState('');

  const handleRegistration = e => {
    setRegistration(e.target.value);
  };

  const handleCompname = e => {
    setCompname(e.target.value);
  };

  const handleVehicletype = e => {
    setVehicletype(e.target.value);
  };

  const handleGoodstype = e => {
    setGoodstype(e.target.value);
  };

  const handleSource = e => {
    setSource(e.target.value);
  };

  const handleDestination = e => {
    setDestination(e.target.value);
  };

  const handlePrice = e => {
    setPrice(e.target.value);
  };

  const handleDocument = e => {
    setDocument(e.target.file);
  };

  const handleNext = async event => {
    event.preventDefault();

    try {
      const response = await instance.post('/Vlist', {
        vehicle_Number,
        company_name,
        goods_type,
        vehicle_type,
        source,
        destination,
        price,
        document,
      });
      alert('Vehicle Added');
      window.location.href = '/Vpending';
      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert('Error adding vehicle');
    }
  };

  return (
    <div className="bg-hero-pattern bg-cover h-screen overflow-hidden">
      <div className="text-6xl mb-24 flex justify-center font-medium gap-5 tracking-wider pt-40 ">
        List Your{' '}
        <span className="text-buttonColor flex flex-row font-outfit font-medium tracking-wider">
          {' '}
          Vehicle
        </span>
      </div>
      <div classname="flex flex-col item-start">
        <div className="grid grid-cols-7 grid-rows-2 gap-1 items-end mx-10">
          <div className="col-span-1 row-span-1 font-normal">
            Registration No.
          </div>
          <div className="col-span-1 row-span-1 font-normal">Company Name</div>
          <div className="col-span-1 row-span-1 font-normal">Vehicle Type</div>
          <div className="col-span-1 row-span-1 font-normal">Goods Type</div>
          <div className="col-span-1 row-span-1 font-normal">Source</div>
          <div className="col-span-1 row-span-1 font-normal">Destination</div>
          <div className="col-span-1 row-span-1 font-normal">Price</div>
          <input
            className="col-span-1 row-span-1 bg-inputBoxColor rounded p-2 outline-none"
            value={vehicle_Number}
            onChange={handleRegistration}
          />

          <input
            className="col-span-1 row-span-1 bg-inputBoxColor rounded p-2 outline-none"
            value={company_name}
            onChange={handleCompname}
          />
          <select
            className="col-span-1 row-span-1 bg-inputBoxColor rounded p-2 outline-none"
            value={vehicle_type}
            onChange={handleVehicletype}
          >
            <option value="Default" selected></option>
            <option value="Roadways">Roadways</option>
            <option value="Airways">Airways</option>
            <option value="Shipways">Shipways</option>
          </select>
          <select
            className="col-span-1 row-span-1 bg-inputBoxColor rounded p-2 outline-none"
            value={goods_type}
            onChange={handleGoodstype}
          >
            <option value="Default" selected></option>

            <option value="Electronics">Electronics</option>
            <option value="Consumable Dry">Consumable Dry</option>
            <option value="Consumable Liquid">Consumable Liquid</option>
          </select>
          <select
            className="col-span-1 row-span-1 bg-inputBoxColor rounded p-2 outline-none"
            value={source}
            onChange={handleSource}
          >
            <option value="Default" selected></option>

            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Pune">Pune</option>
          </select>
          <select
            className="col-span-1 row-span-1 bg-inputBoxColor rounded p-2 outline-none"
            value={destination}
            onChange={handleDestination}
          >
            <option value="Default" selected></option>

            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Pune">Pune</option>
          </select>

          <input
            type="number"
            min={0}
            className="col-span-1 row-span-1 bg-inputBoxColor rounded p-2 outline-none "
            value={price}
            onChange={handlePrice}
          />
        </div>

        <div className="m-8 px-5">
          <label class="block  mb-2 text-xs text-customGrey">
            Supported files: .pdf , .png, .jpg, .jpeg
          </label>
          <input
            class="block w-1/3 text-sm text-white-400 border-none rounded cursor-pointer bg-inputBoxColor  file:text-black file:bg-[#f8f8f8a9] p-2 "
            id="multiple_files"
            type="file"
            value={document}
            onChange={handleDocument}
          />
        </div>

        <div className="flex flex-col items-center pt-9">
          <button
            class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-40 tracking-wider relative bottom-4"
            onClick={handleNext}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vlist;
