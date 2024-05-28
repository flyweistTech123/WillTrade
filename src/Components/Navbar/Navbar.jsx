// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { IoIosArrowDown } from "react-icons/io";

import img from '../../Image/img.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <img src={img} alt="logo" />
                    <h6>Will Trade</h6>
                </div>
                <ul className="nav-items">
                    <li>Markets</li>
                    <li>Trade</li>
                    <li>Futures <IoIosArrowDown /></li>
                    <li>Earn</li>
                    <li>Square <IoIosArrowDown /></li>
                    <li>About</li>
                </ul>
            </div>
            <div className="navbar-right">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;
