import React from 'react'
import logo from '../../images/autoholicsLogo.png'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import * as Scroll from 'react-scroll'
import {
    AiOutlineUser
} from 'react-icons/ai'
import { IoBagHandleOutline } from 'react-icons/io5'

const ShopHeader = ({ click, setClick }) => {
    // const [auth, setAuth] = useState('')
    const [isAuthUser, setAuthUser] = useState(false)
    const [user, setUser] = useState('')
    const [scrollNav, setScrollNav] = useState(false);
    const [isUser, setIsUser] = useState(false)


    let ScrollLink = Scroll.Link

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user && isUser === false) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log("setting user")
            setUser(user)
            setIsUser(true)
        } else {
            // User is signed out
            // ...
        }
    });

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


    const handleStatus = (status) => {
        setClick(status)
    }

    const clearActive = () => {
        setClick(false)
    }

    const logout = async () => {
        console.log("HII")
        await signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
        // toast.success("You logged out!")
        setUser('')
    }
    return (
        <>
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
                containerClassName="toast"
            /> */}
            <div className='shop_header' style={{ background: scrollNav ? '#010606' : 'transparent' }}>
                <div className='nav'>
                    <ScrollLink activeClass="active" className='logo' to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={() => clearActive()}><img src={logo} alt="Autoholics" /></ScrollLink>
                    <div className='nav_menu'>
                        <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleStatus('about')}><p className={click === 'about' ? 'nav_item activate' : 'nav_item'}>About Us</p></ScrollLink>
                        <ScrollLink activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleStatus('services')}><p className={click === 'services' ? 'nav_item activate' : 'nav_item'}>Services</p></ScrollLink>
                        <ScrollLink activeClass="active" to="discover" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleStatus('contact')}><p className={click === 'contact' ? 'nav_item activate' : 'nav_item'}>Contact Us</p></ScrollLink>
                        <Link className='nav_item shop' to="shop" style={{ textDecoration: 'none' }}>
                            Shop
                        </Link>
                        {/* <ScrollLink activeClass="active" to="shop" spy={true} smooth={true} offset={50} duration={500} onClick={() => handleStatus('shop')}><p className={'nav_item'}>Shop</p></ScrollLink> */}
                    </div>
                    <div className='user_controls'>
                        {user ? <p className='user'>{user?.displayName}</p> : ''}
                        {!user?.displayName ? '' : <AiOutlineUser className='profile_icon' />}
                        {!user?.displayName ? '' : <IoBagHandleOutline className='profile_icon' />}
                        {user ? <div className='btn' id='nav_btn' onClick={() => logout()}>Log Out</div> :
                            <Link className='btn' id='nav_btn' to="signin" style={{ textDecoration: 'none' }}>
                                Sign In
                            </Link>
                        }

                    </div>
                </div>
            </div >
        </>


    )
}

export default ShopHeader