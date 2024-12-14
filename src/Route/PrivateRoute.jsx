import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className="text-9xl loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;