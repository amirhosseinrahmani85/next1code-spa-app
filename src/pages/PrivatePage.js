import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utils";
const PrivatePage = (props) => {
 
  return <>{isLogin() ? props.children : <Navigate to="/" />}</>;
};

export default PrivatePage;
