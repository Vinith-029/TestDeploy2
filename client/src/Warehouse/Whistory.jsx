
import { json, useLocation } from 'react-router-dom';
import React , {useEffect , useState}from 'react'
import Navigation from '../components/Nav'
import { domAnimation } from 'framer-motion';
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios";
import { logo } from '../assets'; 

export const Whistory = () => {

  const navigate = useNavigate();
  const [Whists, sethist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://testlogiship.onrender.com/api/warehouse/getHistory', {
          // params: {
          //   status: 'approved',
          // },
        });
        sethist(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // const [hist, sethist] = useState([{
  //   Product_ID : "",
  //   Product_Name : "",
  //   Vendor_Name : "",
  //   Product_Type : "",
  //   Quantity : "",
  //   Check_in_Time : "",
  //   Check_out_Time : ""
  // }])

  // useEffect(() =>{
  //   fetch("/history").then(res =>{
  //     if(res.ok){
  //         return res.json()
  //     }
  //   }).then(jsonRes => sethist(jsonRes));
  // })

  return (
    <div >
      <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center overflow-hidden">
      <div className="text-6xl mb-9 flex justify-center font-bold font-mono gap-7 tracking-wide " >PRODUCT<span className='text-buttonColor flex flex-row font-bold font-mono tracking-wide'> HISTORY</span></div>
        <div className=" relative w-full flex flex-col  items-center bg-transparent m-4 p-4 text-center font-mono font-extralight ">
        <div className='space-y-24'>
        <table class='w-auto border-separate [border-spacing:0rem] '>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6">Product ID</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Product Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Vendor Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Product Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Quantity</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Check-in Time</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Check-out Time</th>
            </tr>
          </thead>
          <tbody className='tracking-wider'>
            {Whists.map((hist)=>(
                          <tr>
                          <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">{hist.product_id}</td>
                          <td className="col bg-inputBoxColor bg-opacity-50">{hist.product_name}</td>
                          <td className="col bg-inputBoxColor bg-opacity-50">{hist.vendor_name}</td>
                          <td className="col bg-inputBoxColor bg-opacity-50">{hist.product_type}</td>
                          <td className="col bg-inputBoxColor bg-opacity-50">{hist.quantity}</td>
                          <td className="col bg-inputBoxColor bg-opacity-50">{hist.createdAt}</td>
                          <td className="col bg-inputBoxColor bg-opacity-50">{hist.check_out}</td>
               
                        </tr>
              
              
            ))}

            {/* <tr>
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
   
            
            </tr> */}
          </tbody>
          </table>
          </div>

        <div className="flex flex-col justify-center items-center mt-10 ">

        <div className='flex flex-row gap-20'>
        <Link to="/Second">
        <button class="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider">
            -- BACK 
            </button>
            </Link>
           
         
       
        </div>

        </div>
        </div>


      </div>


    </div>
  );
}
export default Whistory;