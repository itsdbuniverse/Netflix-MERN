import React from 'react'
import { useContext,useState } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const{isFetching, dispatch} = useContext(AuthContext);
    // const details  = useContext(AuthContext);
    // console.log("details" , details)

    const handleLogin = (e)=> {
        e.preventDefault();

        login({ email, password }, dispatch);

    };
  return (
    <div className="login">
        <form action="" className="loginForm">
            <input type="text" placeholder="email" className="loginInput"
             onChange={(e)=>setEmail(e.target.value)}
             />
            <input type="password" placeholder="password" className="loginInput"
            onChange={(e)=>setPassword(e.target.value)}
             />
            <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>
        </form>
    </div>
  )
}
