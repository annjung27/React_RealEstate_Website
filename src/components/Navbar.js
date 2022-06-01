import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';





function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=>  setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>                    
                    <Link to='/' className='navbar-logo'>
                        ALEXANDER REALTY                                             
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars" }/>                        
                    </div>
                    
                    <div className='navbar-right'>                    
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to="/" className='nav-links'>Home</Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to="/properties" className='nav-links'>Properties</Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to="/services" className='nav-links'>Services</Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to="/contact" className='nav-links'>Contact</Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to="/sign-up" className='nav-links-mobile'>Sign Up</Link>
                            </li>
                        </ul>
                        {button && <Button path='/sign-up'buttonSize='btn--medium' buttonStyle='btn--outline'>Sign Up</Button>}
                    </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar