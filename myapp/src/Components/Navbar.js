import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {

    // i can write functions here
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };
    return (
        <div>
            <div className="Navbar">
                <div >
                    <h1 className="ebay">ebay</h1>
                </div>
                <div className='navbar_list'>
                    <Link className="navbar_item navbar_home " to="/">Home</Link>
                    <Link className="navbar_item navbar_contact" to="/contact">Contact</Link>
                    <Link className="navbar_item navbar_privacy" to="/privacy">Privacy</Link>
                    <Link className="navbar_item navabar_loginform" to="/loginform">Loginform</Link>
                    <Link className="navbar_item navbar_signup" to="/signup">Signup</Link>

                    
                    
                </div>
                {/* menu icon starts */}
                <MenuIcon className='menuIcon' onClick={handleClick}/>
                {/* menu icon ends */}

                {/* search box starts */}
                <div className='navbar_search_box'>
                        <input className="search_box" type="text" placeholder='Find here'></input>
                </div>

                {/* search box ends */}

                7
                {/* side bar starts */}
                <div className={isActive ? "side_navbar" : "none"}>
                    <Link className="side_navbar_item side_navbar_home " to="/">Home</Link>
                    <Link className="side_navbar_item side_navbar_contact" to="/contact">Contact</Link>
                    <Link className="side_navbar_item side_navbar_privacy" to="/privacy">Privacy</Link>
                    <Link className="side_navbar_item side_navabar_loginform" to="/loginform">Loginform</Link>
                    <Link className="side_navbar_item side_navbar_signup" to="/signup">Signup</Link>
                </div>
                {/* side bar ends */}
            </div>
        </div>
    )
}

export default Navbar;