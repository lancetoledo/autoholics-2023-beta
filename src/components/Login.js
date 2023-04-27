import React from 'react'
import logo from '../images/autoholicsLogo.png'
import { Link } from "react-router-dom";

const Login = ({ title, button, href, link, help, headerStatement }) => {
    return (
        <div className='Login'>
            <div className='login_wrapper'>
                <Link className='logo_div' to="/" style={{ textDecoration: 'none' }}>
                    <img className='logo' src={logo} alt="Autoholics" />
                </Link>
                <div className='form_content'>
                    <form>
                        <h1>{title}</h1>
                        <label htmlFor='for'>Email</label>
                        <input type='email' required></input>
                        <label htmlFor='for'>Password</label>
                        <input type='password' required ></input>
                        <button type='submit'>{button}</button>
                        <span className='forgot'>{help}</span>
                        <div className='options'>
                            <span>{headerStatement}</span>
                            <a href={href}>{link}</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login