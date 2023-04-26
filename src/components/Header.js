import React from 'react'
import logo from '../images/autoholicsLogo.png'
import { useEffect, useState } from 'react'

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
                <div className='nav_btn'>Sign in</div>
            </div>
        </div >
    )
}

export default Header 