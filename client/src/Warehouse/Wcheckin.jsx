import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { Link, Navigate, useNavigate} from 'react-router-dom';


import 'react-datepicker/dist/react-datepicker.css';

const instance = axios.create({
  baseURL: 'https://testlogiship.onrender.com/api/warehouse_test',
  timeout: 5000, // Timeout to wait for a response (in milliseconds)
});



const Wcheckin = () => {

    const navigate = useNavigate();

    const [product_name, setProdName] = useState('');
    const [product_id, setProdID] = useState('');
    const [product_type, setProductType] = useState('');
    const [vendor_name, setVendor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [volume, setVolume] = useState('');
    const [check_in, setCheckInDate] = useState("");
    const [check_out, setCheckOutDate] = useState("");

    
  const handleproductName = (e) => {
    setProdName(e.target.value);
  };

  const handleproductID = (e) => {
    setProdID(e.target.value);
  };

  const handlevendor = (e) => {
    setVendor(e.target.value);
  };

  const handleProductType = (e) => {
    setProductType(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleCheckInDate = (e) => {
    setCheckInDate(e.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await instance.post("/put_ware_test", {
        product_name,
        product_id,
        product_type,
        vendor_name,
        quantity,
        volume,
        check_in,
        check_out
      });
      alert("Product Added");
      navigate("/Wtest");
      console.log(response.data);
    }catch(err){
      console.error(err);
      alert("Error adding product");
    }
  }



    return (
        <div className="bg-hero-pattern bg-cover h-screen flex flex-col items-center justify-center border">
        <h2 className="text-white text-4xl pb-10 ">WAREHOUSE PRODUCT Check-In</h2>
        <div>
        <table class='w-auto border-separate [border-spacing:0rem] text-xs '>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
            <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6 ">Product Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Product ID</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Product Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Vendor Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider ">Quantity</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Volume(in m3)</th> 
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Check In Date</th>            
              </tr>
              </thead >
              <tbody className='tracking-wider'>
                <tr className="border border-solid border-l-0 border-r-0">
                    <td className=''><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' value={product_name} onChange={handleproductName} type="text"/></td>
                    <td><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' value={product_id} onChange={handleproductID} type="number" /></td>
                    <td>
                        <select className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3" value={product_type} onChange={handleProductType} name='Product Type'>
                        <option value="Consumable">Consumable</option>
                        <option value="Non-Consumable">Non-Consumable</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Perishable">Perishable</option>
                        <option value="Glass">Glass</option>
                        <option value="def" disabled selected></option>
                        </select></td>
                    <td><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' value={vendor_name} onChange={handlevendor} type="text" /></td>
                    <td><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' value={quantity} onChange={handleQuantity}  type="number" /></td>
                    <td><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' value={volume} onChange={handleVolume} type="number" /></td>
                    <td><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' value={check_in} onChange={handleCheckInDate}  type="Date" /></td>              
                </tr>
              </tbody>
              </table>
                <div className='w-full flex justify-center items-center'>
                <button type="submit" className=" bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 h-10 mt-20  flex flex-col justify-center items-center rounded" onClick={handleSubmit}>Check-In</button>
                </div>
                <div className='w-full flex justify-center mt-10'>
                <Link to="/Wtest">
                <button class="bg-none hover:text-black hover:bg-[#b491ff] text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
                 Back
                </button>
                </Link>
            </div>  
        </div>
    </div>
    )
}


export default Wcheckin;