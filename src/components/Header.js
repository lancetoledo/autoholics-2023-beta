import React from 'react'
import logo from '../images/autoholicsLogo.png'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    return (
        <div className='header' style={{ background: scrollNav ? '#010606' : 'transparent' }}>
            <div className='nav'>
                <img className='logo' src={logo} alt="Autoholics" />
                <div className='nav_menu'>
                    <p className='nav_item'>About Us</p>
                    <p className='nav_item'>Services</p>
                    <p className='nav_item'>Contact Us</p>
                </div>
                <Link className='btn' id='nav_btn' to="signin" style={{ textDecoration: 'none' }}>
                    Sign In
                </Link>
            </div>
        </div >
    )
}

export default Header 