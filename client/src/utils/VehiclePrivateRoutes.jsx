import { Outlet, Navigate } from "react-router-dom";

const VehiclePrivateRoutes = () =>{
    let auth = {'token': localStorage.getItem('token')}
    return(
        auth.token ? <Outlet/> :  <Navigate to="/Vlogin"/>  
    )
} 

export default VehiclePrivateRoutes