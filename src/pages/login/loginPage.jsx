import React from "react";
import LoginForm from "../../components/forms/login/loginForm";
import './loginPageStyle.css';

function Login() {
    return(
        <div className="login-container">
            <h1>Pizza</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;