import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { redirect, useNavigate } from "react-router-dom"

const Login = (props) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = async () => {
        try {

            var res = await axios.post("http://localhost:9002/login", user);
            // alert(res.data.message);
            props.onLogin(res.data.user);
            navigate("/");

        } catch (error) {
            alert("sign in error")
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <button className="button" onClick={login}>Login</button>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    )
}

export default Login