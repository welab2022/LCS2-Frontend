import React from 'react';
import {useNavigate, Route} from 'react-router-dom';

 const PrivateRoute = ({children}) => {
  let navigate = useNavigate();

  const isLoggedIn = Boolean(localStorage.getItem('name'))
   if(!isLoggedIn) return navigate("/login")
  return children
}
export default PrivateRoute
