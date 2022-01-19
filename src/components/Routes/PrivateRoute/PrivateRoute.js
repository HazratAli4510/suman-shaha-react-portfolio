import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth()
    const location = useLocation()

    if (isLoading) {
        return (
            <div className='text-center' style={{
                height: '100vh',
                marginTop: '40vh'
            }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to='/sign-in' state={{ from: location }} />;

};

export default PrivateRoute;