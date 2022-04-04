import React from 'react';

import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/'>HOME</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/reviews'>REVIEWS</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/dashboard'>DASHBOARD</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blogs'>BLOGS</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/about'>ABOUT</NavLink>
        </nav>
    );
};

export default Navbar;