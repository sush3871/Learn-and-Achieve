import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/images/logo/logo.png';
import popup from '../assets/images/comman/login-popup.png';

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Add event listener to close modal on outside click
        const handleOutsideClick = (e) => {
            if (modalOpen && !e.target.closest('.Login_modal')) {
                setModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            // Clean up the event listener
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [modalOpen]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleNoButtonClick = () => {
        // Close the modal after handling "No" button action
        setModalOpen(false);
    };

    const handleModalClick = (e) => {
        // Prevent closing modal when clicking inside it
        e.stopPropagation();
    };

    return (
        <header className='header site_header' style={{ paddingBottom: '80px', position:'relative' }}>
            <nav className="navbar navbar-expand-lg fixed-top bg-grey">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="Logo" className='img-fluid' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#WebsiteNavbar" aria-controls="WebsiteNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <path d="M5 1C5 0.447734 5.44773 0 6 0H19C19.5523 0 20 0.447734 20 1C20 1.55227 19.5523 2 19 2H6C5.44773 2 5 1.55223 5 1ZM19 6H1C0.447734 6 0 6.44777 0 7C0 7.55227 0.447734 8 1 8H19C19.5523 8 20 7.55227 20 7C20 6.44777 19.5523 6 19 6ZM19 12H10C9.44777 12 9 12.4477 9 13C9 13.5522 9.44777 14 10 14H19C19.5523 14 20 13.5522 20 13C20 12.4477 19.5523 12 19 12Z" fill="black" />
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="WebsiteNavbar">
                        <ul className="navbar-nav gap-lg-3 mb-2 ms-lg-5 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/About'>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Service'>Our Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Bharat_Sat'>Bharat SAT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Contact'>Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Rewards'>Rewards</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Join_Us'>Join as a Coordinator</NavLink>
                            </li>
                        </ul>
                        <div className="header_right ms-lg-5">
                            <div className="btn_group">
                                <div className="button_wrapper">
                                    <a className="main-btn" onClick={openModal} style={{cursor:'pointer'}}>
                                        <span>Login</span>
                                        <span className="dot"></span>
                                        <span className="curve">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                                <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {modalOpen &&
                <div className="Login_modal" id='loginpopup'>
                    <div className="d-flex gap-2 align-items-center" onClick={handleModalClick}>
                        <div className="login-img">
                            <img src={popup} alt="" className="img-fluid" />
                        </div>
                        <div className="login-footer">
                            <h4>Have you registered...?</h4>
                            <button type="button" className="btn me-3" disabled>Yes</button>
                            <Link to='/Student-Registration' className="btn btn1" onClick={handleNoButtonClick}>No</Link>
                        </div> 
                    </div>
                </div>
            }
        </header>
    )
}
