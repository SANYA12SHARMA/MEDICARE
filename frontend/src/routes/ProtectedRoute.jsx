import {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext.jsx';
const ProtectedRoute = ({children,allowedRoles}) => {
  const {token,role} = useContext(authContext);
  console.log('Token:', token);
console.log('Role:', role);
  const isAllowed = allowedRoles.includes(role);
  const accessibleRoute = 
  (token && isAllowed) ? children:<Navigate to="/login" replace={true}/> ;
  return accessibleRoute;
}

export default ProtectedRoute;

