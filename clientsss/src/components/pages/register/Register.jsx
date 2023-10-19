import { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios';
import './register.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../../../../config';

export default function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = async (e) => {
        e.preventDefault();
        // Set email, password, and username from refs
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
    
        try {
            await axios.post(BaseUrl+"auth/register",{ email, username, password },{
                headers : {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA4ODIwMzI3MTcyMjU1MWU1NmMzZmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTUwNTY0NDksImV4cCI6MTcyNjU5MjQ0OX0.uVm1LF5XJiePSU-WX3RvZuFqR4fWWgsvbGZ1rD-yYwg",
                  },
            }
            ); // Make the POST request
            navigate("/login"); // Redirect to the login page
        } catch (err) {
            // Handle errors
            console.log(err);
        }
    }
    
    
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">

            
            <img className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""></img>
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="mcontainer">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {
            !email ?(
                <div className="input">
            <input type="email" placeholder='email address' ref={emailRef}/>
            <button className="registerButton" onClick={handleStart}>Get Started</button>
        </div>
        ) : (
        <form className="input">
        <input type="username" placeholder='username' ref={usernameRef}/>
        <input type="password" placeholder='Password' ref={passwordRef}/>
        <button className="registerButton" onClick={handleFinish}>Start Membership</button>
    </form>)}
        
        </div>
    </div>
  )
}
