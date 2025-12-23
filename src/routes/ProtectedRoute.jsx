import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
import { isTokenValid } from '../utils/authTokenValidate';


const ProtectedRoute = () => {

    const isAuth=isTokenValid

    if(!isAuth){return <Navigate to="/login" replace />;}
    return <Outlet />;
};


export default ProtectedRoute;