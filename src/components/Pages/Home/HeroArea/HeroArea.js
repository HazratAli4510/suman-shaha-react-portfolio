import React from 'react';
import './HeroArea.css'
import profilePic from '../../../../images/main-profile.png'

const HeroArea = () => {
    return (
        <section id="heroArea">
            <div className='container'>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-7">
                        <h5 className='heading-small'>WELCOME TO MY WORLD
                        </h5>
                        <h1 className='heading'>Hi, I’m <span>Suman Shaha <br /> a</span>   Digital Marketer</h1>
                        <p className='meta-description'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        <div className="social-icons">
                            <h5>FIND WITH ME</h5>
                            <ul className='icons'>
                                <li className='facebook'>
                                    <a target='_blank' href="https://facebook.com" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className='linkedin'>
                                    <a target='_blank' href="/" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li className='instagram'>
                                    <a target='_blank' href="/" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <img className='img-fluid' src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HeroArea;