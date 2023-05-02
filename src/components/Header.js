import React from 'react'
import logo from '../images/autoholicsLogo.png'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import {
    AiOutlineUser
} from 'react-icons/ai'


const Header = ({ click, setClick }) => {
    // const [auth, setAuth] = useState('')
    const [isAuthUser, setAuthUser] = useState(false)
    const [user, setUser] = useState('')
    const [scrollNav, setScrollNav] = useState(false);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            setUser(user)
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
            <div className='header' style={{ background: scrollNav ? '#010606' : 'transparent' }}>
                <div className='nav'>
                    <img className='logo' src={logo} alt="Autoholics" />
                    <div className='nav_menu'>
                        <p className='nav_item' onClick={() => handleStatus("about")}>About Us</p>
                        <p className='nav_item' onClick={() => handleStatus("services")} >Services</p>
                        <p className='nav_item' onClick={() => handleStatus("contact")}>Contact Us</p>
                        <p className='nav_item' onClick={() => handleStatus("shop")}>Shop</p>
                    </div>
                    <div className='user_controls'>
                        {user ? <p className='user'>Welcome back {user?.displayName}</p> : ''}
                        {!user?.displayName ? '' : <AiOutlineUser className='profile_icon' />}
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

export default Header 