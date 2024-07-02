'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';



const Navbar = () => {
    useEffect(() => {
    window.onscroll = function () {
        if (window.scrollY >= 75) {
            document.querySelector('.main-nav').classList.add('sticky-tops');

            console.log('a7a');
        } else {
            document.querySelector('.main-nav').classList.remove('sticky-tops');

        }
    }
    }, [])
    

    return (
        <div className='main-nav'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
                <div className="container ">
                    <a className="navbar-brand fs-1 fw-normal text-white" href="#">Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 gap-4 navs  mb-lg-0 ">
                            <li className="nav-item ">
                                <Link href="/" className='nav-link neon-button'>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className='nav-link neon-button'>
                                    About
                                </Link>
                            </li>
                         
                            <li className="nav-item">
                                <Link href="/product" className='nav-link neon-button'>
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className='nav-link neon-button'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
         
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
