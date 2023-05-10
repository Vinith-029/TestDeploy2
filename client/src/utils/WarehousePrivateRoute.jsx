import { Outlet, Navigate } from "react-router-dom";

const WarehousePrivateRoutes = () =>{
    let auth = {'token': localStorage.getItem('token')}
    return(
        auth.token ? <Outlet/> :  <Navigate to="/Warehouse"/>  
    )
} 

export default WarehousePrivateRoutes