import React from 'react';

import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar-section'>
            <div>
                {/* <h2>Navber</h2> */}
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/'>HOME</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/reviews'>REVIEWS</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/dashboard'>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blogs'>BLOGS</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/about'>ABOUT</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;