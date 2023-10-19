import { useContext, useState } from 'react'
import './login.scss'
import { login } from '../../../authContext/ApiCalls';
import { AuthContext } from '../../../authContext/AuthContext';
import axios from 'axios';
import { BaseUrl } from '../../../../config';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate()


    const handleLogin = async(e) =>{
        e.preventDefault();
        try {
            const res = axios.post(BaseUrl+"auth/login", {email, password});
            if(res.staus === 200){
                navigate('/')
            }
            else{
                alert("Please provide Right Credetials")
            }
        } catch (error) {
        }
    }
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">


                    <img className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""></img>
                </div>
            </div>
            <div className="mcontainer">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <a href="#">Learn more</a>
                    </small>
                </form>
            </div>
        </div>
    )
}
