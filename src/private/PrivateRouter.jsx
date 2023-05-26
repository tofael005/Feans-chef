import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import LoaderSpinner from '../component/LoaderSpinner';


const PrivateRoutes = ({children}) => {
    const {loading, user} = useAuth()
    const location = useLocation()
    if(loading) {
        return <LoaderSpinner/>
    }
    if(user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} />;
};

export default PrivateRoutes;