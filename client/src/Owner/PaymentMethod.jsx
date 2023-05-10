import React from 'react'
import Navigation from '../components/Nav'
import { domAnimation } from 'framer-motion';
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios";

export const PaymentMethod = () => {
  const navigate = useNavigate();


  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://localhost:3000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:3000/api/checkout", {
        amount
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Logiship",
        description: "Payment for shipment ",
        order_id: order.id,
        callback_url: "http://localhost:3000/api/paymentverification",
        handler : function (response){
          if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
            navigate('/')
          } else {
            navigate('/Transportdetails');
          }
          location.href = redirect_url;

  },
        prefill: {
            name: "",
            email:"",
            contact: ""
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#000000"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}


  return (
    <div>
    <Navigation/>
    <div className='bg-hero-pattern bg-cover flex flex-col h-screen justify-center space-y-10'>
      <div className='text-center text-[30px] text-white font-bold'>
     Select your mode of <span className='text-[30px] text-[#915EFF]'>Payment</span>
        </div>
        <div className=" flex flex-col text-center items-center justify-center space-x space-y-10"> 
          
        <button class="bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-6 border
        border-[#915EFF] rounded">
          Credit card 
          </button>

        <button class="bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-6 border
        border-[#915EFF] rounded">
          Net Banking
        </button>

        <button class="bg-[#915EFF] hover:bg-purple-700  text-white font-bold py-2 px-6 border
        border-[#915EFF] rounded">
          UPI Payments
        </button>


        <div className=" flex flex-row text-center items-center justify-center space-x-36"> 
        <Link to="/TransportMode">
        <button class="bg-none hover:bg-[#915EFF]  hover:text-black text-white font-bold py-2 px-4 border
        border-[#915EFF] rounded">
          Back
        </button>
        </Link>
        <button class="bg-none hover:bg-[#915EFF]  hover:text-black text-white font-bold py-2 px-4 border
        border-[#915EFF] rounded" onClick={() => checkoutHandler(1)}>Buy Now</button>
       
      
        </div>
      </div>
    </div>
    </div>
  );
}

export default PaymentMethod;

