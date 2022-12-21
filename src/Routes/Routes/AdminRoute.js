import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, adminLoadin] = useAdmin(user?.email)
    if(loading || adminLoadin){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;