// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Logo from '../../assets/IITHLOGO.png';

// function Navbar() {

//     return (
//             <div className='navbar'>
//                 <div className='navbar-container'>
//                     <Link to='/' className='navbar-logo'>
//                         <img className='logo-yoo' src={Logo} alt="logo" />
//                         <i class='fab fa-typo3' />
//                     </Link>

//                     <ul className='nav-menu'>
//                         <li className='nav-item'>
//                             <a href='/' className='nav-links'>HOME</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='/people' className='nav-links'>PEOPLE</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='/infrastructure' className='nav-links'>INFRASTRUCTURE</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='/phases' className='nav-links'>PHASES</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='/gallery' className='nav-links'>GALLERY</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a target="_blank" rel="noopener noreferrer" href='https://www.iith.ac.in/tenders/#Civil%20Works' className='nav-links'>TENDERS</a>
//                         </li>
//                         <li className='nav-item'>
//                             <a href='/complaints' className='nav-links'>COMPLAINTS</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//     );
// }

// export default Navbar;




import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/IITHLOGO.png";
import "./Navbar.css";

function Navbar1() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    return (
        <div className="full-nav">
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img className="logo-yoo" src={Logo} alt="logo" />
                    </Link>

                    <div
                        className={click ? "container change" : "container"}
                        onClick={handleClick}
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href="/" className="nav-links" onClick={() => setClick(false)}>
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/people"
                                className="nav-links"
                                onClick={() => setClick(false)}
                            >
                                PEOPLE
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/infrastructure"
                                className="nav-links"
                                onClick={() => setClick(false)}
                            >
                                INFRASTRUCTURE
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/phases"
                                className="nav-links"
                                onClick={() => setClick(false)}
                            >
                                PHASES
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/gallery"
                                className="nav-links"
                                onClick={() => setClick(false)}
                            >
                                GALLERY
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                target="_blank" rel="noopener noreferrer" href='https://www.iith.ac.in/tenders/#Civil%20Works'
                                className="nav-links"
                                onClick={() => setClick(false)}
                            >
                                TENDERS &#8599;
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://forms.gle/"
                                className="nav-links"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setClick(false)}
                            >
                                COMPLAINTS &#8599;
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar1;
