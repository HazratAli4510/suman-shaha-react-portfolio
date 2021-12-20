import * as React from 'react';
import Header from '../../Global/Header/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Join/Join.css'
import { Link } from 'react-router-dom';

const SignIn = () => {


    return (
        <section id='join'>
            <Header />
            <div className="container">
                <div className="form-container flex-column d-flex align-items-center justify-content-center">
                    <div className="form-title">
                        <h3>Sign In Here</h3>
                    </div>
                    <div className="box">
                        <form>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '20rem' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="standard-textarea"
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="standard"
                                        type='email'
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-textarea"
                                        label="Password"
                                        placeholder="Enter a password"
                                        type="password"
                                        variant="standard"

                                    />
                                </div>

                                <div className="option-links d-flex justify-content-between my-1">
                                    <Link className='text-decoration-none text-dark ms-2' to='/join'>Not registered?</Link>
                                    <Link className='text-decoration-none text-dark' to='./'>Forgot Password?</Link>
                                </div>

                                <input id='form-submit' type="submit" value="Sign In" />

                                <span className='d-block mt-2'>Or Login With</span>
                                <div className="socail-logins">
                                    <ul className='d-flex justify-content-center align-items-center'>
                                        <li><button type='button' className='btn google shadow-none'><i class="fab fa-google"></i></button></li>
                                        <li><button type='button' className='btn facebook shadow-none'><i class="fab fa-facebook-f"></i></button></li>
                                        <li><button type='button' className='btn twitter shadow-none'><i class="fab fa-twitter"></i></button></li>
                                    </ul>
                                </div>
                            </Box>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;