import React , {useEffect , useState}from 'react'
import Navigation from '../components/Nav'
import { domAnimation } from 'framer-motion';
import { Link , useNavigate ,useLocation } from 'react-router-dom';
import axios from "axios";
import { logo, transport } from '../assets'; 

export const SelectVehicle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = location.state;
  console.log(productId);
  const [transports, setTransports] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState();
  const [selectprice, setselectprice] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://testlogiship.onrender.com/api/transport/getApproved', {
          params: {
            status: 'approved',
          },
        });
        setTransports(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("https://testlogiship.onrender.com/api/getkey")

    const { data: { order } } = await axios.post("https://testlogiship.onrender.com/api/checkout", {
        amount
    })
    const options = {
        key,
        amount:transport.price,
        currency: "INR",
        name: "Logiship",
        description: "Payment for shipment ",
        order_id: order.id,
        image: logo,

    

        callback_url: "https://testlogiship.onrender.com/api/paymentverification",
        handler : function (response){
          if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
            navigate('/')
          } else {
            try {
              axios.put(`https://testlogiship.onrender.com/api/package/${productId}/transport`, { transport_id: selectedVehicle._id });
              console.log("Package transport ID updated successfully.");
    
              axios.put(`https://testlogiship.onrender.com/api/transport/update/${selectedVehicle._id}`, { status: 'intransit' });
              console.log("Transport status updated successfully.");
    
              navigate('/Transportdetails');
            } catch (error) {
              console.error(error);
              alert("Error updating package transport ID or transport status");
            }
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
            "color": "#000000",
            image_padding: false
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}
  return (
    <div > 
    <Navigation/>
      <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center overflow-hidden">
      <div className="text-3xl mb-9 mt-12 flex justify-center font gap-3 tracking-wide " >Choose your<span className='text-[#915EFF] flex flex-row'>Vehicle</span></div>
        <div className=" relative w-full flex flex-col  items-center bg-transparent m-4 p-4 text-center font-mono font-extralight ">
        <div className='space-y-24'>
        <table class='w-auto border-separate [border-spacing:0rem] '>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
            <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6">Select</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6">Registration No.</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Company Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Vehicle Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6">status</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6">Price</th>
              
          
            </tr>
          </thead>
          <tbody className='tracking-wider'>
          {transports.map((transport) => (
            <tr  key={transport._id}>
            <td className="col bg-inputBoxColor bg-opacity-50">
            <input id="default-radio-1" type="radio" value={transport._id}
  checked={selectedVehicle === transport}
  onChange={() => setSelectedVehicle(transport)} name="default-radio" class="rounded w-4 h-4 
        text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
        dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-75"/>
        </td>
              <td className="col bg-inputBoxColor bg-opacity-50 ">{transport.vehicle_Number}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.company_name}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.vehicle_type}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.status}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.price}</td>
            </tr>
          ))}
          </tbody>
          </table>
          </div>

        <div className="flex flex-col justify-center items-center mt-10 ">

        <div className='flex flex-row gap-40'>
        <Link to="/ProdDetails">
        <button class="bg-[#915EFF] hover:bg-purple-700 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider">
            BACK 
            </button>
            </Link>
           
            <div className='flex flex-row'>
            
        <button class="bg-[#915EFF] hover:bg-purple-700 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider" onClick={() => checkoutHandler(selectedVehicle.price)}>
             PAY NOW
            </button>
          
       
        </div>
       
        </div>

        </div>
        </div>


      </div>


    </div>
  );
}
export default SelectVehicle;
