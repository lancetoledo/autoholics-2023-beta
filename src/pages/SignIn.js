import React from 'react'
import logo from '../images/autoholicsLogo.png'
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className='SignIn'>
            <div className='signin_wrapper'>
                <Link className='logo_div' to="/" style={{ textDecoration: 'none' }}>
                    <img className='logo' src={logo} alt="Autoholics" />
                </Link>
                <div className='form_content'>
                    <form>
                        <h1>Sign in to your account</h1>
                        <label htmlFor='for'>Email</label>
                        <input type='email' required></input>
                        <label htmlFor='for'>Password</label>
                        <input type='password' required ></input>
                        <button type='submit'>Continue</button>
                        <span>Forgot password</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn