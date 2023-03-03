import React from "react";
import "./Login.css"

const Login = () =>{
    return(
        <div className="LoginPage">
            <div className="firstLoginSection">
                <h2 className="logo">E-Khdem</h2>
                <h3 className="loginBigTitle">Hello dear costumer!</h3>
            </div>
            <div className="secondLoginSection">
                <h3 className="loginBigTitle">Welcome back !</h3>
            </div>
        </div>
    )
}
export default Login;