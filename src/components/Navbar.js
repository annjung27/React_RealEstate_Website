import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#main" className="navbar-logo">
            ALEXANDER REALTY
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"} />
          </div>

          <div className="navbar-right">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="#main" smooth="true" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="#cards" smooth="true" className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="#properties" smooth="true" className="nav-links">
                  Properties
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="#newsletter" smooth="true" className="nav-links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
