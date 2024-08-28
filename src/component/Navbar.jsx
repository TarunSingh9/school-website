import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to='/' className='title'>R.B Modern Public School</Link>
            <div 
                className='menu' 
                onClick={() => setMenuOpen(!menuOpen)} 
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li><NavLink to='/' onClick={() => setMenuOpen(false)}>Home</NavLink></li>               
                <li><NavLink to='/Academics' onClick={() => setMenuOpen(false)}>Academics</NavLink></li>
                <li><NavLink to='/Events' onClick={() => setMenuOpen(false)}>Events</NavLink></li>
                <li><NavLink to='/ContactUs' onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
                <li><NavLink to='/About' onClick={() => setMenuOpen(false)}>About</NavLink></li>
                <li><NavLink to='/Login' onClick={() => setMenuOpen(false)}>Login</NavLink></li>
                <li><NavLink to='/Signup' onClick={() => setMenuOpen(false)}>Sign Up</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
