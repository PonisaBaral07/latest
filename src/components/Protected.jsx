import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Protected = ({children}) => {
    const { isAuthenticated,user}=useAuth0();
const navigate=useNavigate();
useEffect(()=>{
    if(!isAuthenticated&& !user){
        navigate("/login");
    }
},[isAuthenticated,user]);
  return children;
};

export default Protected;