import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { Link } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/warehouse_test/',
    timeout: 5000, // Timeout to wait for a response (in milliseconds)
  });

const ProductForm = () => {
    const [product_id, setProductId] = useState('');
    const [check_out, setcheck_out] = useState('');
  
    const handleProductIdChange = (e) => {
      setProductId(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setcheck_out(e.target.value);
    };
  
    const handleSubmit = async(event) => {
        event.preventDefault();
    try{
        const data = await instance.post('putUpdate',{
            product_id,
            check_out
        });
        alert("Product updated");
        navigate("/Wtest");
        console.log(data.data);
    }catch(err){
        console.error(err);
        alert("Error adding product");
      }
    }
    //   e.preventDefault();
    //   // Update check_out field for product
    //   axios.put('/api/warehouse_test/product', { productId, newDate })
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // };

// const Wcheckout = () => {

//     const [product_id, setproduct_id] = useState("");
// const [check_out, setcheck_out] = useState("");

// const handleproductID = (e) => {
//     setproduct_id(e.target.value);
 
//   };

// const handleCheckOutDate = (e)=>{
//     setcheck_out(e.target.value);
// }  

// // const onCheck_Out_Update = () =>{
// //     axios.post('/api/CheckOutUpdate',{
// //         product_id : setproduct_id,
// //         check_out : check_out
// //     })
// //     .then(Response =>{
// //         console.log("Success")
// //     })
// // }

// const handleSubmit = async (event) => {
//     event.preventDefault();
//     try{
//         const response = await instance.put("/update_check_out",
//        {product_id : setproduct_id,
//         setcheck_out
//       });
//       alert("Check-out Updated");
//       navigate("/Wtest");
//       console.log(response.data);
//     }catch(err){
//       console.error(err);
//       alert("Error adding product");
//     }
//   }

// const handleSubmit = () => {
//     axios.post('/update_check_out',{
//         product_id : 
//     })
// }


    return (
        <div className="bg-hero-pattern bg-cover h-screen flex flex-col items-center justify-center border">
        <h2 className="text-white text-4xl pb-10 ">WAREHOUSE PRODUCT Check-Out</h2>
        <div>
        <table class='w-auto border-separate [border-spacing:0rem] text-xs '>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 h-10 tracking-wider" value={product_id} onChange={handleProductIdChange} >Product ID</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider"value = {check_out} onChange={handleDateChange}>Check Out Date</th>            
              </tr>
              </thead >
              <tbody className='tracking-wider'>
                <tr className="border border-solid border-l-0 border-r-0">
                    <td><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' type="number" /></td>
                    <td><input className='col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-3' type="Date" /></td>                     
                </tr>
              </tbody>
              </table>
                <div className='w-full flex justify-center items-center'>
                <button type="submit" className=" bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-40 h-10 mt-20  flex flex-col justify-center items-center rounded" onClick={handleSubmit}>Check-Out</button>
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


export default ProductForm;