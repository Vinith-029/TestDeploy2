import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Vapprove = () => {
  const [transports, setTransports] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/transport/getTransit', {
          params: {
            status: 'intransit',
          },
        });
        setTransports(response.data);
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div >
      <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center overflow-hidden">
      <div className="text-6xl mb-9 flex justify-center font-semibold font-mono gap-7 tracking-wide " > <span className='text-buttonColor flex flex-row font-semibold font-mono gap-7 tracking-wider'> In-Transit</span>Vehicle</div>
        <div className=" relative w-full flex flex-col  items-center bg-transparent m-4 p-4 text-center font-mono font-extralight ">
        <div className='space-y-24'>
        <table class='w-auto border-separate [border-spacing:0rem]  '>
          <thead>
            <tr className="border border-solid border-l-0 border-r-0 ">
            <th className="col bg-inputBoxColor bg-opacity-70 w-40 px-3 py-6 ">Registration No.</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Company Name</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Vehicle Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Goods Type</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider ">Source</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Destination</th>
              <th className="col bg-inputBoxColor bg-opacity-70 w-40 tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className='tracking-wider'>
          {transports.map((transport) => (
            <tr  key={transport._id}>
              <td className="col bg-inputBoxColor bg-opacity-50 px-2 py-3">{transport.vehicle_Number}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.company_name}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.vehicle_type}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.goods_type}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.source}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.destination}</td>
              <td className="col bg-inputBoxColor bg-opacity-50">{transport.price}</td>
              </tr>
              ))}
          </tbody>
          </table>
          </div>

        <div className="flex flex-col justify-center items-center mt-10 ">

        
        <Link to="/Vhome">
        <button className="bg-buttonColor hover:bg-buttonColor hover:brightness-125 text-white font-mono font-bold py-2 px-4 rounded mt-100 w-100 tracking-wider">
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
export default Vapprove;