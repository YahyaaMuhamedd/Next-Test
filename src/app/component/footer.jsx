import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto pt-5 pb-3 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="text-white">Company Name</h5>
                        <p className="text-white">About Us</p>
                        <p className="text-white">Contact Us</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-white">Support</h5>
                        <p className="text-white">FAQs</p>
                        <p className="text-white">Shipping Policy</p>
                        <p className="text-white">Return Policy</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-white">Categories</h5>
                        <p className="text-white">Category 1</p>
                        <p className="text-white">Category 2</p>
                        <p className="text-white">Category 3</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-white">Connect With Us</h5>
                        <p className="text-white">Follow Us on Facebook</p>
                        <p className="text-white">Follow Us on Twitter</p>
                        <p className="text-white">Follow Us on Instagram</p>
                    </div>
                </div>
                <hr className="bg-light" />
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
