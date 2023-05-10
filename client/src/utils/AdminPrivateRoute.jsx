import { Outlet, Navigate } from "react-router-dom";

const AdminPrivateRoutes = () =>{
    let auth = {'token': localStorage.getItem('token')}
    return(
        auth.token ? <Outlet/> :  <Navigate to="/Owner"/>  
    )
} 



export default AdminPrivateRoutes