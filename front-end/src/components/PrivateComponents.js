import React from "react";
import {Navigate,Outlet} from "react-router-dom";


const PrivateComponent=()=>{
    let auth1=localStorage.getItem("custome");
    let auth2=localStorage.getItem("user")
    if(auth1){
        return <Outlet/>
    }
    if(auth2)
    {
        return <Outlet/>
    }
    // console.warn("auth",auth);
    return <Navigate to="/signup"/>
}
export default PrivateComponent;