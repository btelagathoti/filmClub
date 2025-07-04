import React from 'react';
// import {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
// import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {

    return (
        <div>
            <div className="Navbar">
                    <h1 className="nav_heading">Film Club</h1>
                <div className='navbar_list'>
                    {/* <button >darkMode</button> */}
                    <Link className="navbar_item navbar_home " to="/">Home</Link>
                    <Link className="navbar_item navbar_contact" to="/contact">Contact</Link>
                    <Link className="navbar_item navbar_privacy" to="/privacy">Privacy</Link>    
                    <Link className="navbar_item navbar_signup" to="/signup">SignUp/Login</Link>  
                </div>
            </div>
        </div>
    )
}

export default Navbar;