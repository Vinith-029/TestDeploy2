import React,{useEffect,useState} from 'react';
import { domAnimation } from 'framer-motion';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../components/Nav';

export const ApproveVehicles = () => {
  const [transports, setTransports] = useState([{}]);
  const[status,setStatus]=useState('');
  const [selectedVehicle, setSelectedVehicle] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://testlogiship.onrender.com/api/transport/getPending`, {
          params: {
            status: 'Pending',
          },
        });
        
        setTransports(response.data);
       // console.log(transports)
        //console.log(transports);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  const handleApprove = () => {
    //console.log("checked here...")
    setStatus("approved");
    const name = "Ka23Aw"
    console.log("helllllllo")
    //console.log(ID);
    console.log(selectedVehicle._id)
     const ID  = selectedVehicle._id;
    // console.log(ID);
    axios
      .post("https://testlogiship.onrender.com/api/transport/update/" + ID, { status : "approved",
      ID
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDecline = () => {
    //console.log("checked here...")
    setStatus("Reject");
    // const name = "Ka23Aw"
    // console.log("helllllllo")
    //console.log(ID);
    console.log(selectedVehicle._id)
     const ID  = selectedVehicle._id;
    // console.log(ID);
    axios
      .post("https://testlogiship.onrender.com/api/transport/update/" + ID, { status : "Reject",
      ID
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'approved') {
      handleApprove();
    } else if (status === 'Reject') {
      handleDecline();
    }
  };


  return (
    <div>
    <Navigation/>
      <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center overflow-hidden space-y-5">
      <div className="text-3xl justify-center mt-32 h-screen flex font gap-3">List  of  Vehicles  for<span className='text-[#915EFF]'>Approval</span></div>
        <div className=" relative w-full flex flex-col  items-center bg-transparent m-4 p-4 text-center font-mono font-extralight ">
        <div className='space-y-5'>
        <table class='w-auto border-separate [border-spacing:0rem] text-xs '>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
            <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6 ">Registration No.</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Company Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Vehicle Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Goods Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider ">Source</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Destination</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Price</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Time taken</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Documents</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Approved/Not</th>
            
              </tr>
          </thead>
          <tbody className='tracking-wider'>
          {transports.map((transport) => (
            <tr key={transport._id}>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">{transport.vehicle_Number}</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">{transport.company_name}</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">{transport.vehicle_type}</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">{transport.goods_type}</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">{transport.source}</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">{transport.destination}</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">{transport.price}</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2">2 hours</td>
              <td className="col bg-inputBoxColor bg-opacity-50 px-6 py-2"><a href='#'>document</a></td>
              <td className='col bg-inputBoxColor bg-opacity-50 px-6 py-2'>

              <input id="default-radio-1" type="radio" name="approval-6" 
              class="rounded w-3 h-4 text-blue-600 bg-inputBoxColor bg-opacity-50 border-gray-300 
              focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
              focus:ring-2 dark:bg-inputBoxColor dark:bg-opacity-50 dark:border-gray-600 opacity-75"  value={transport._id}
              
              onChange={() => { setSelectedVehicle(transport);
                                handleApprove();}} />
             
              <label for="default-radio-1" class="ml-2 text-xs font-medium text-white"  >Approved</label>
              <br/>
              
              <input id="default-radio-2" type="radio"name="approval-6" 
              class="rounded w-3 h-4 text-blue-600 bg-inputBoxColor bg-opacity-50 border-gray-300 
              focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
              focus:ring-2 dark:bg-inputBoxColor dark:bg-opacity-50 dark:border-gray-600 opacity-75"  value={transport._id}
             
              onChange={() =>  { setSelectedVehicle(transport);
                               handleDecline();}} />
              
              <label for="default-radio-2" class="ml-2 text-xs font-medium text-white" >Declined</label>
      </td>
            
            </tr>
          ))};
          </tbody>
          </table>
          </div>

          <div className='flex flex-row mt-16 space-x-64 justify-center relative bottom-8'>
        <Link to="/Admin">
        <button class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded">
          Back
        </button>
        </Link>
        {/* <Link to="/"> */}
        <button type="UPDATE" class="w-60 bg-[#915EFF] hover:bg-purple-700 text-white font-bold py-2 px-4 border border-[#915EFF] rounded" onClick={handleSubmit}>
          Submit
        </button>
        {/* </Link> */}
      </div>
        </div>


      </div>


    </div>
  );
}
export default ApproveVehicles;