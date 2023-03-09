import React from 'react'
import logo from '../images/autoholicsLogo.png'

const Header = () => {
    return (
        <div className='header'>
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