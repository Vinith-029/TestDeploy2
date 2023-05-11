
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from '../components';
import  axios  from 'axios';
const Second =()=>{

    const [st , setSt] = useState('none')
    //const {state} = useLocation()
    // const dropdownToggle = document.querySelector('.dropdown-toggle');
    // const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  const p ="Bangalore_w@logiship.com";


  const {state} = useLocation();
  const [city,setMyCity] = useState('') 

  const [imgdata,setImg] = useState()

  const [totdata,setData] = useState("")

  const [remdata,setData2] = useState("") 
  
  
  const URL = "https://testlogiship.onrender.com/api/warehouse/fetchDetails/"+ p
  const URL2 = "https://testlogiship.onrender.com/api/warehouse/fetchImg/" + p
  const URL3 = "https://testlogiship.onrender.com/api/warehouse/fetchData/" + p 
   const URL4 = "https://testlogiship.onrender.com/api/warehouse/fetchData2/" + p

  useEffect(()=>{
    const fetchBack = async ()=>{
      await axios.get(URL).then((res)=> setMyCity(res.data.warehouse_name))
     //.catch((err)=>console.log(err,"it has error"));
    await axios.get(URL2).then((res)=>  setImg(res.data.img.data))
      // console.log(res.data.img.data)
     await axios.get(URL3).then((res)=> setData(res.data.total_area))
      //console.log(res.data.total_area)
      await axios.get(URL4).then((res)=> setData2(res.data.area_remaining
         ))
    };
    fetchBack();
     },[]);

  const updateVal = async (total_V,rem_V) =>{
    // try{
      console.log("yooo999")
      // var formData = new FormData();

      // formData.append('total_V' , total_V)
      // formData.append('rem_V' , rem_V)
     console.log(total_V)
      await axios.post("https://testlogiship.onrender.com/api/warehouse/putUpdate/"+ p ,{
        total_V,
        rem_V
      })

    //   if (response.status === 200) {
    //     const responseData = response.data;
    //     return responseData;
    //   } else {
    //     throw new Error("Update failed");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
    
  function toggle(){
    if(st === 'none')
    setSt('block')
    else
    setSt('none')
  }


    function reload(){
       window.location.reload();
    }
    function nextWare(){
        alert("No other warehouse is assigned to this user");
    }
    return (
        <div className="bg-hero-pattern bg-cover h-screen">
            <Nav/>
<div className="flex flex-col md:flex-row">
<div className="w-full md:w-1/2 flex flex-col ml-[20px] mt-5">
    <div className="w-5/6 mx-5 rounded-3xl h-64 bg-gray-500 mt-20 opacity-100 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${imgdata})`}}>
    <h2 className="text-black font-bold text-[38px] py-20 pt-10 pl-10">{city}</h2>
    </div>
    <div className="w-5/6 mx-5 rounded-3xl h-64 bg-[#caa8f5] mt-5 mb-20 opacity-75">
        <h4 className='text-black font-bold text-3xl  pt-[20px] pl-10'>{"Total Space : "+totdata+" Unit"}</h4>
        <h4 className='text-black font-bold text-3xl  pl-10 pt-[50px] mb-[20px]'>{"Available Space : "+remdata+" Unit"}</h4>
        <button className='bg-violet-500 hover:bg-violet-600 text-white font-bold border-b-4 border-violet-700 hover:border-violet-500 rounded ml-10 text-md py-2 px-4' onClick={()=>{updateVal(totdata,remdata); reload()}}>Refresh</button>
    </div>
  </div>
  
      
  
  <div className="w-full md:w-1/2 p-6 mr-10 mt-[100px] bg-[#caa8f5] opacity-75 rounded-3xl h-5/6">
    
    <div className="flex flex-col gap-12 w-1/2 ml-[140px] mb-[30px]">
            <a href="#" target="_blank">
            <Link to="/Wcurrent">
            <button class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded ml-10 tracking-wider mt-[15px]">
            CURRENT PRODUCT
            </button>
            </Link>
            </a>

            <a href="#" target="_blank">
            <Link to="/Whistory" >
            <button class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded ml-10 tracking-wider mt-[15px]">
            PRODUCT HISTORY
            </button>
            </Link>
            </a>

            <a href="#" target="_blank">
            {/* <Link to = "/Wupdate"> */}
            <Link to = "/Wtest">
            <button class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded ml-10 tracking-wider mt-[15px]">
            UPDATE PRODUCT
            </button>
            </Link>
            </a>
            </div>
  </div>
  
</div>

<div className="dropdown-container absolute bottom-0 font-bold right-0 mr-32 mb-16">
  {/* <button className="dropdown-toggle absolute bottom-0 font-bold right-0 bg-violet-500 hover:bg-violet-600 py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded" onClick={toggle}>Change Warehouse</button> */}
<div className="dropdown-menu absolute bg-gray-500 text-white py-2 px-4 rounded-lg w-fit mr-32"style={{ display : st }}>
    <a href="#">Bangalore</a><br />
    <a href="#">Kolkata</a><br />
    <a href="#">Pune</a><br />
  </div>
</div>

{/* <button className="absolute bottom-0 font-bold right-0 mr-32 mb-16 bg-violet-500 hover:bg-violet-600 py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded ml-10 tracking-wider" onClick={nextWare}>
    NEXT WAREHOUSE
  </button> */}

        </div>
    );
};


export default Second;