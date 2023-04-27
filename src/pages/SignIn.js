import React from 'react'
import logo from '../images/autoholicsLogo.png'
import Login from '../components/Login';
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <Login
            title="Sign in"
            button="Sign in"
            href='/signup'
            link='Sign Up'
            help="Forgot Password"
            headerStatement='Need an account?'
        />
    )
}

export default SignIn