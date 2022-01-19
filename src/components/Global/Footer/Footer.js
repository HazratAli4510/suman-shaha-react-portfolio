import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col py-md-0 py-lg-5">
                        <div className="footer-item-title">
                            <h3 className='text-white'>Contact Us</h3>
                        </div>
                        <div className="footer-item">
                            <address> <br />
                                1556 Broadway, suite 416 <br />
                                New York, NY 10120 USA
                            </address>
                            <a href="tel:+8801303451005" className="phone-number text-decoration-none"> +8801303451005 </a> <br />
                            <a href="mailto:contact@sumanshaha.com" className="phone-number text-decoration-none"> contact@sumanshaha.com </a>
                        </div>
                    </div>
                    <div className="col py-md-0 py-lg-5">
                        <div className="footer-item-title">
                            <h3 className='text-white'>Find Me</h3>
                        </div>
                        <div className="footer-item mt-4">
                            <iframe title='Address In Google Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6970302147047!2d89.37733056535842!3d24.840032552192795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e9da380be9%3A0xdbfbe418cc05bf34!2sBakshi%20Bazar%2C%20Bogura!5e0!3m2!1sen!2sbd!4v1642554513142!5m2!1sen!2sbd" width="400" height="250" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="col py-md-0 py-lg-5">
                        <div className="footer-item-title">
                            <h3 className='text-white'>Information</h3>
                        </div>
                        <div className="footer-menu mt-4">
                            <ul className='p-0'>
                                <li className='mb-1 mt-0'><Link className='text-decoration-none' to='/'>About us</Link></li>
                                <li className='my-1'><Link className='text-decoration-none' to='/'>Contact Us</Link></li>
                                <li className='my-1'><Link className='text-decoration-none' to='/'>Terms and condition</Link></li>
                                <li className='my-1'><Link className='text-decoration-none' to='/'>Privecey policy</Link></li>
                                <li className='my-1'><Link className='text-decoration-none' to='/'>Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-3 col-md-4 text-center col-lg-6">
                            <img className='pt-2' src={logo} alt="Website Logo" />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-6">
                            <p className='pt-2 pt-sm-3 ms-2 ms-md-0'>© 2022 <Link to='/' className='text-decoration-none'>sumanshaha.com</Link> . All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;