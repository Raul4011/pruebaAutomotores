import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute = ({user,children,redirectTo='/login'}) => {
  console.log('aqui me llega este user '+user);

 if (!user) {
  return <Navigate to={redirectTo}/>
 }

  return children ? children :<Outlet/>
};

export default PrivateRoute;
