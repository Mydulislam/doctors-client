import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ErrorPage = () => {
    const { Logout } = useContext(AuthContext);
    const error = useRouteError()
    const navigate = useNavigate();
    const handleSignOut = () => {
        Logout()
            .then(() => { 
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    
    return (
        <div>
            <h1>Oops!</h1>
            <p className='text-red-500'>Sorry, an unexpected error has occurred.</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h1><button onClick={handleSignOut}>Signout</button> and Goback Login page</h1>
        </div>
    );
};

export default ErrorPage;