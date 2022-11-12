import React,{useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
const UsignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('customers');
        if(auth)
        {
            navigate("/");
        }
        // 
    },[])
    const collectData= async()=>{
        console.warn(name,email,password);
        let result=await fetch("http://localhost:5000/cregister",{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json',
                


            }
        });
        result= await result.json();
        console.log(result);
        localStorage.setItem("custome",JSON.stringify(result));
        navigate('/');

    }
    return (
        <div className="register">
            <h1>
                Register
            </h1>
            <input className="inputBox" type="text" placeholder="Enter Your Name"
                value={name} onChange={(e)=>setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Your Email Address"
                value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            
          
            <button onClick={collectData} className="appButton" type="button"> Sign Up</button>
        </div>
    )
}
export default UsignUp;