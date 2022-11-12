import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
const Clogin=()=>{
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('custome');
        if(auth)
        {
            navigate("/");
        }

    },[])
    const handleLogin=async()=>{
        console.warn(email,password)
        let result=await fetch("http://localhost:5000/ulogin",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.name)
        {
            localStorage.setItem("custome",JSON.stringify(result));
            alert(result.email)
            navigate("/");


        }else{

            alert("please enter correct details");
        }
    }
    return (
        <div className="login">
            <input type="text" className="inputBox" placeholder="enter your email"
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
        
            <input type="password" className="inputBox" placeholder="enter password"
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handleLogin} className="appButton" type="button">LOG IN</button>
        </div>
    )
}
export default Clogin;