import React from 'react';  
import { Navigate } from 'react-router-dom';  

interface ProtectedRouteProps {  
    element: React.ReactNode; // The type of the element prop  
  }  

const ProtectedRoute :  React.FC<ProtectedRouteProps> = ({ element }) => {  
  // Check if the token exists in local storage  
  const token = localStorage.getItem('token');  

  return token ? element : <Navigate to="/signin" />;  
};  

export default ProtectedRoute;  