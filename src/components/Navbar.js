import React from 'react';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu'


export default function Navbar(props) {
    return (
        <div>
            <div id="navbar">
                <div className="navLinks">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/tracks">Tracks</NavLink></li>
                    </ul>
                    <h1 className="pageTitle">Monolith</h1>
                    <ul>
                        <li><NavLink to="/">Darkroom</NavLink></li>
                        <li><NavLink to="/tracks">Boombox</NavLink></li>
                    </ul>
                </div>
            </div>

            <Menu disableCloseOnEsc >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tracks">Tracks</NavLink>
                <NavLink to="/">Darkroom</NavLink>
                <NavLink to="/tracks">Boombox</NavLink>
            </Menu>
        </div>
        
        
    )
}


