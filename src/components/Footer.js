import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_wrapper'>
                <div className='company'>Autoholics</div>
                <p className='copyright'>Autoholics © 2021 All rights reserved.</p>
                <div className='socials'>
                    <div className='socials_icon'>
                        <FaFacebook />
                    </div>
                    <div className='socials_icon'>
                        <FaInstagram />
                    </div>
                    <div className='socials_icon'>
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer