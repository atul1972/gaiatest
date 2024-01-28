import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import loginJson from './login.json'
const loginData = loginJson.loginData;

const Login = () => {
  
    const navigate = useNavigate();
    
    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        {
            Object.keys(loginData).map((item, i)=>{
                if(username===loginData[item].login_id && password===loginData[item].password) {
                    localStorage.setItem("username", loginData[item].login_id);
                    navigate("/dashboard");
                    return
                }
            })
        }
    }
    return (
        <>
            <div className="loginBox">
                <h2 className="loginTxt">Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <input className="custom" name="username" placeholder="Username" type="text" />
                    </div>
                    <div>
                        <input className="custom" name="password" placeholder="Password" type="password" />
                    </div>
                    <div>
                        <button type="submit" className="loginbtn">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;