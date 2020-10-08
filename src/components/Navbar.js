import React from 'react';
import { NavLink } from 'react-router-dom';
import monolith_logo_splatter3 from '../images/monolith_logo2.jpg'


export default function Navbar() {
    return (
        <div id="navbar">
            <div id="logoHolder" className="fade-in">
                <img src={monolith_logo_splatter3} alt="Monolith"/>
            </div>
            <div className="navLinks">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tracks">Tracks</NavLink></li>
                <li><NavLink to="/lists">Darkroom</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </div>
        </div>
    )
}
