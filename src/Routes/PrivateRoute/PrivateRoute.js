import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({childran}) => {
    const {user,loading }=useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <p><span className="flex justify-center items-center text-5xl loading loading-dots loading-lg">......</span>
        </p>}
         if (user ){
            return childran
         }
         return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;