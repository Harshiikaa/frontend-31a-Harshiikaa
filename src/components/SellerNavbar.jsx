
import '../components/SellerNavbar.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../components/Sidebar.css'
import { setIsLoggedin } from '../pages/Auth/SellerLogin';

const SellerNavbar = () => {
    const seller = JSON.parse(localStorage.getItem('seller'))
    const navigate = useNavigate();



    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand text-danger fw-bold" href="#">Navbar</a> */}
                    <div className="logo-container"><img src={logo} alt="Company Logo" className="logo" /> </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <form className="d-flex" role="search">
                                {
                                    seller ? <>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {/* Profile */}
                                                Welcome! Business {seller.businessName}
                                            </button>

                                        </div>
                                    </>
                                        : <>
                                            <Link className="btn btn-outline-black" to={"/register"}>Register</Link>
                                            <Link className="btn btn-outline-black" to={"/login"}>Login</Link>
                                        </>
                                }
                            </form>
                        </ul>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default SellerNavbar
