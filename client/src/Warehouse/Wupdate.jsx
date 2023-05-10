import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/warehouse_current',
  timeout: 5000, // Timeout to wait for a response (in milliseconds)
});



const Wupdate = () => {

  // const {state} = useLocation()

  // const [city,setMyCity] = useState('') 
  // const p = state.email;

  // const URL = "http://localhost:3000/api/warehouse/fetchDetails/"+ p


  const [selectedDate, setSelectedDate] = useState(null);

  const [Product_Name, setProdName] = useState('');
  const [Product_ID, setProdID] = useState('');
  const [vendor_name, setVendor] = useState('');
  const [product_type, setProductType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [volume, setVolume] = useState('');
  const [check_in, setCheckInDate] = useState(null);
  const [check_out, setCheckOutDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

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


  const handleCheckIn = async() => {
    try{
      
     const response = await instance.post("/updateVal",{
        Product_Name,
        Product_ID,
        vendor_name,
        product_type,
        quantity,
        volume
       });
       alert("Product Added")
      }
    catch(err)
    {
      console.log(err);
      alert(err);
    }
   
  };

  const handleCheckOut = async() => {
    try{
      const response = await instance.post("/W_Update", {
        Product_Name,
        vendor_name,
        product_type,
        quantity,
        volume,
        check_out
      });
      alert("Updated");
    }catch(err){
      console.error(err);
      alert("Error");
    }
    // fetch('/checkout', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ checkOutDate })
    // })
    //   .then(res => res.text())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'checkIn') {
      handleCheckIn();
    } else if (selectedOption === 'checkOut') {
      handleCheckOut();
    }
  };



  // useEffect(()=>{
  //   axios.get(URL).then((res)=> setMyCity(res.data.warehouse_name))
  // },[]);

  return (
    <div className="bg-hero-pattern bg-cover h-screen flex flex-col items-center justify-center border">
    <h2 className="text-white text-4xl pb-10 ">WAREHOUSE PRODUCT UPDATE</h2>
    <form onSubmit={handleSubmit}>

        <label className="text-white mr-3">Product Name: </label>
        <input className="form-select mt-1 w-50  bg-inputBoxColor bg-opacity-50 outline- text-white-300 text-400 rounded p-1" value={Product_Name} onChange={handleproductName}/>
        <br />
        <br />

        <label className="text-white mr-11">Product ID: </label>
        <input className="form-select mt-1 w-50  bg-inputBoxColor bg-opacity-50 outline- text-white-300 text-400 rounded p-1" value={Product_ID} onChange={handleproductID}/>
        <br />
        <br />
        
        <label className="text-white mr-4">Vendor Name: </label>
        <input className="form-select mt-1 w-50  bg-inputBoxColor bg-opacity-50 outline- text-white-300 text-400 rounded p-1"  value={vendor_name} onChange={handlevendor}/>
        <br />
        <br />

        <label className="text-white mr-5">Product Type: </label>
        <input className="form-select mt-1 w-50  bg-inputBoxColor bg-opacity-50 outline-white text-white-300 text-400 rounded p-1"  value={product_type} onChange={handleProductType}/>
        <br />
        <br />
        <label className="text-white mr-14">Quantity: </label>
        <input className="form-select mt-1 w-50  bg-inputBoxColor bg-opacity-50 outline-white text-white-300 text-400 rounded p-1"  value={quantity} onChange={handleQuantity}/>
        <br />
        <br />
        <label className="text-white mr-16">Volume: </label>
        <input className="form-select mt-1 w-50  bg-inputBoxColor bg-opacity-50 outline-white text-white-300 text-400 rounded p-1"  value={volume} onChange={handleVolume}/>
        <br />
        <br />

        <label className="text-white">Entry: </label>
        <br />
        <br />


        <div className="flex items-center mb-4">
        <input id="default-radio-1" type="radio" value="CheckIn" checked={selectedOption === 'checkIn'} onChange={() => setSelectedOption('checkIn')}  name="default-radio" className="rounded w-4 h-4 
        text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-75"/>
        <label for="default-radio-1" className="ml-2 text-sm font-medium text-white">Check-in</label>
        <div className='ml-8'>
        {/* <DatePicker
            selected={check_in}
            onChange={date => setCheckInDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            showYearDropdown
            customInput={<input style={{ color: 'black' }} />}
            closeOnScroll
            popperClassName="my-popper-class"
          /> */}
        </div>
        </div>

        <div className="flex items-center">
        <input id="default-radio-2" type="radio" value="CheckOut" checked={selectedOption === 'checkOut'} onChange={() => setSelectedOption('checkOut')} name="default-radio" className="rounded w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-75"/>
        <label for="default-radio-2" className="ml-2 text-sm font-medium text-white">Check-out</label>
        {/* <div className='ml-5'>
        <DatePicker className='Date'
            selected={check_out}
            onChange={date => setCheckOutDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            showYearDropdown
            closeOnScroll
          />
        </div> */}
        <button type="submit" className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 mt-4 ml-20 flex flex-col justify-center items-center rounded">UPDATE</button>
        </div>
        {/* bg--400 w-40 mt-4 flex flex-col justify-center items-center rounded ml-20 hover:bg-violet-700 */}
        
        
    </form>
</div>
  )
}

export default Wupdate;
