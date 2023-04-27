import React from 'react'
import logo from '../images/autoholicsLogo.png'
import { Link } from "react-router-dom";
import Login from '../components/Login';

const SignUp = () => {
    return (
        <Login
            title="Sign up"
            button="Sign up"
            href='/signin'
            link='Sign In'
            help=''
            headerStatement='Already have an account?'
        />
    )
}

export default SignUp