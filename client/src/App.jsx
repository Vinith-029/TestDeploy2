import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, WLog, Vlogin,Vreject,Vpending, Vregister ,Dash,Vlist ,Vlisting ,Vapprove ,Vhome,Admin,  TransportDetails ,ProdDetails ,Invoice, SelectVehicle, WarehouseSelection, ShowInventory ,  Second ,Wupdate,Tracking,
ApproveDocuments, ApproveVehicles, Credential,Vtransit,Wcredential,Wtest, Wcheckin, Wcheckout} from './components';


import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Home,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import WCurr from './Warehouse/Wcurrent';
import AdminPrivateRoutes from './utils/AdminPrivateRoute';
import WarehousePrivateRoutes from './utils/WarehousePrivateRoute';
import VehiclePrivateRoutes from './utils/VehiclePrivateRoutes';
import { Whistory } from './Warehouse/Whistory';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Owner" element={<Login />} />
        <Route element = {<AdminPrivateRoutes/>}>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/ProdDetails" element={<ProdDetails />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/SelectVehicle" element={<SelectVehicle />} />
          <Route path="/WarehouseSelection" element={<WarehouseSelection />} />
          <Route path="/Transportdetails" element={<TransportDetails />} />
          <Route path='/ShowInventory' element={<ShowInventory />} />
          <Route path='/Tracking' element={<Tracking/>} />
          <Route path='/ApproveDocuments' element={<ApproveDocuments/>}/>
          <Route path='/ApproveVehicles' element={<ApproveVehicles/>}/>
          <Route path='/Credential' element={<Credential/>}/>
          <Route path='/Wcredential' element={<Wcredential/>}/>
        </Route>
        {/* Owner */}

        {/* Warehouse */}
        <Route path="/Warehouse" element={<WLog />} />
        <Route element= {<WarehousePrivateRoutes/>}>
          <Route path='/Second' element={<Second/>} />
          <Route path='/Wupdate' element={<Wupdate/>} />
          <Route path='/Wcurrent' element={<WCurr/>} />
          <Route path='/Whistory' element={<Whistory/>} />
          <Route path='/Wtest' element = {<Wtest/>}/>
          <Route path='/WCheckin' element = {<Wcheckin/>}/>
          <Route path='/Wcheckout' element = {<Wcheckout/>}/>
        </Route>
 

        {/* Vehicle */}
        <Route path="/Vlogin" element={<Vlogin />} />
        <Route element= {<VehiclePrivateRoutes/>}>
          <Route path="/Vhome" element={<Vhome />} />
          <Route path="/Vlist" element={<Vlist />} />
          <Route path="/Vlisting" element={<Vlisting />} />
          <Route path="/Vreject" element={<Vreject />} />
          <Route path="/Vpending" element={<Vpending />} />
          <Route path="/Vtransit" element={<Vtransit />} />
          <Route path="/Vapprove" element={<Vapprove />} />
        </Route>
          {/* <Route path="/Warehouse" element={<Dash />} /> */}
        <Route path="/Vregister" element={<Vregister />} />
      </Routes>
    </BrowserRouter>
  );
};
  const app = () => {
    return (
      <div className="h-screen w-full bg-cover bg-center bg-fixed bg-">
        <Login />
      </div>
    );
  };

  export default App;
