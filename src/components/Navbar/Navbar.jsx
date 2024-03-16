import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img src="logo.png" alt="logo" className="logo" />

                <ul>
                    <li><a className="menu-item" href="#">Home</a></li>
                    <li><a className="menu-item" href="#">Skills</a></li>
                    <li><a className="menu-item" href="#">Work Experience</a></li>
                    <li><a className="menu-item" href="#">Contact Me</a></li>

                    <button className="contact-btn" onClick={ ()=> {}}>Hire Me</button>
                </ul>

                <button className="menu-btn" onClick={ ()=> {}}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar;