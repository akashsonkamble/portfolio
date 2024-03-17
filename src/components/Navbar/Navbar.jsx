import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MobileNav from './MobileNav/MobileNav';

import './Navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu ] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
            <div className="nav-content">
                <img src="logo.png" alt="logo" className="logo" />

                <ul>
                    <li><a className="menu-item" href="#">Home</a></li>
                    <li><a className="menu-item" href="#">Skills</a></li>
                    <li><a className="menu-item" href="#">Work Experience</a></li>
                    <li><a className="menu-item" href="#">Contact Me</a></li>

                    <button className="contact-btn" onClick={() => {}}>Hire Me</button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span >
                        
                        {openMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar;