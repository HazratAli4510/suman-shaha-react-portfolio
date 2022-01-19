import * as React from 'react';
import Header from '../../Global/Header/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Join/Join.css'
import { Link } from 'react-router-dom';
import ForgotPasswordModal from './ForgotPasswordModal';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import Footer from '../../Global/Footer/Footer'

const SignIn = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    document.title = 'Sign In - Suman Shaha'

    const [open, setOpen] = React.useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isVerified, setIsVerified] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')


    const handleClickOpen = () => {
        setOpen(true);
    };


    const { signInWithGoogle, signInWithEmail, signInViaFacebook } = useAuth()

    const handleSignIn = (e) => {
        e.preventDefault()




        signInWithEmail(email, password, setIsVerified, setErrorMessage)
    }


    return (
        <>
            <Header />
            <section id='join'>
                <div className="container">
                    <div className="form-container flex-column d-flex align-items-center justify-content-center">
                        <div className="form-title">
                            <h3>Sign In Here</h3>
                        </div>
                        <div className="box">
                            <form onSubmit={handleSignIn}>
                                <Box
                                    component="div"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '20rem' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            onChange={e => setEmail(e.target.value)}
                                            label="Email"
                                            placeholder="Enter your email"
                                            variant="standard"
                                            type='email'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            onChange={e => setPassword(e.target.value)}
                                            label="Password"
                                            placeholder="Enter a password"
                                            type="password"
                                            variant="standard"
                                            required

                                        />
                                    </div>

                                    <div className="option-links d-flex justify-content-between my-1">
                                        <Link className='text-decoration-none text-dark ms-2' to='/join'>Not registered?</Link>
                                        <Link onClick={handleClickOpen} className='text-decoration-none text-dark' to='./'>Forgot Password?</Link>
                                        <ForgotPasswordModal open={open} setOpen={setOpen}></ForgotPasswordModal>
                                    </div>

                                    <input id='form-submit' type="submit" value="Sign In" />

                                    <span className='d-block mt-2'>Or Login With</span>
                                    <div className="socail-logins">
                                        <ul className='d-flex justify-content-center align-items-center'>
                                            <li><button onClick={() => signInWithGoogle()} type='button' className='btn google shadow-none'><i className="fab fa-google"></i></button></li>

                                            <li><button onClick={() => signInViaFacebook()} type='button' className='btn facebook shadow-none'><i className="fab fa-facebook-f"></i></button></li>

                                            <li><button type='button' className='btn twitter shadow-none'><i className="fab fa-twitter"></i></button></li>
                                        </ul>
                                        {
                                            isVerified || <span className='text-danger'>Email is not verified. <br />Check your email to verify </span>
                                        }
                                        {
                                            <span className='text-danger'>{errorMessage === 'auth/user-not-found' ? "Email not registred" : errorMessage === 'auth/wrong-password' ? 'Invalid Password, try again' : errorMessage}</span>
                                        }
                                    </div>
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default SignIn;