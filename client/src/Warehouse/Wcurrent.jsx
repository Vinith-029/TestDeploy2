import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const WCurr = () => {


  const URL = "http://localhost:3000/api/warehouse_current/fetchCurrent"
  // const [productID,setProdID] = useState();
  // const [productName,setProdName] = useState();
  // const [vendorName,setvendorName] = useState();
  // const [productType,setproductType] = useState();
  // const [quantity,setQuantity] = useState();
  const [Whists, sethist] = useState([]);
  useEffect(()=>{
    const func = async() =>{
     await axios.get(URL).then((res)=> 
      // setProdID(res.data.product_ID),
      // setProdName(res.data.product_name),
      // setvendorName(res.data.vendor_name),
      // setproductType(res.data.product_type),
      // setQuantity(res.data.quantity),
      sethist(res.data)
      )
    }
    func();
  })


  return (
    <div >
      <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center overflow-hidden">
      <div className="text-6xl mb-9 flex justify-center font-semibold font-mono gap-7 tracking-wide " > <span className='text-buttonColor flex flex-row font-semibold font-mono gap-7 tracking-wider'> CURRENT</span>ITEMS</div>
        <div className=" relative w-full flex flex-col  items-center bg-transparent m-4 p-4 text-center font-mono font-extralight ">
        <div className='space-y-24'>
        <table class='w-auto border-separate [border-spacing:0rem]'>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6">Product Id</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6">Product Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Vendor Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider ">Product Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider ">Quantity</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider ">Volume</th>

            </tr>
          </thead>
          <tbody className='tracking-wider'>
          {
          Whists.map((hist)=>(
            <tr>
            <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">{hist.product_ID}</td>
            <td className="col bg-inputBoxColor bg-opacity-50">{hist.product_name}</td>
            <td className="col bg-inputBoxColor bg-opacity-50">{hist.vendor_name}</td>
            <td className="col bg-inputBoxColor bg-opacity-50">{hist.product_type}</td>
            <td className="col bg-inputBoxColor bg-opacity-50">{hist.quantity}</td>
            <td className="col bg-inputBoxColor bg-opacity-50">{hist.volume}</td>
       
  
 
          </tr>
  
          ))}
                    {/* <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
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

            </tr>
            <tr>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>
              <td className="col bg-inputBoxColor bg-opacity-50">Vehicle</td>

            
            </tr> */}

          </tbody>
          </table>
          </div>

        <div className="flex flex-col justify-center items-center mt-10 ">

        
        <Link to="/Second">
        <button className="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider center">
             -- BACK
            </button>
            </Link>
            <div className='flex flex-row'>
        
       
       
       
        </div>

        </div>
        </div>


      </div>


    </div>
  );
}

export default WCurr;


